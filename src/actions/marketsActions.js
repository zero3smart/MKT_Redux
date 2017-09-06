import { SET_MARKETS } from './types';
import axios from 'axios';

export function setMarkets(markets) {
  return {
    type: SET_MARKETS,
    markets
  };
}

export function fetchMarkets() {
  return dispatch => {
    return axios.get('https://mkt-stag.herokuapp.com/api/markets').then(res => {
      debugger;
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      console.log(res);
    });
    /*fetch('https://mkt-stag.herokuapp.com/api/markets', {
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json; charset=utf-8",
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }

      console.log(res);
      return res.json();
    }).then(data => {
      console.log(data);
      dispatch(setMarkets(data.markets))
    });*/

    // fetch("src/data/data.json")
    // .then(response => {
    //   if (response.status !== 200) {
    //     console.log(`There was a problem: ${response.status}`)
    //     return;
    //   }
    //   response.json().then(data => {
    //     dispatch(setMarkets(data.markets));
    //   });
    // });
  }
}