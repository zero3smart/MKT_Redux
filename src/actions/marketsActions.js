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
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setMarkets(res.data.markets));
    }, err => {

    });

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