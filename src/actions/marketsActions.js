import { SET_MARKETS } from './types';

export function setMarkets(markets) {
  return {
    type: SET_MARKETS,
    markets
  };
}

export function fetchMarkets() {
  return dispatch => {
    /*fetch('https://mkt-stag.herokuapp.com/api/markets', {
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json; charset=utf-8",
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      console.log(res);
      return res.json();
    }).then(data => {
      console.log(data);
      dispatch(setMarkets(data.markets))
    });*/
    fetch("src/data/data.json")
    .then(response => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`)
        return;
      }
      response.json().then(data => {
        console.log(data);
        dispatch(setMarkets(data.markets));
      });
    });
  }
}