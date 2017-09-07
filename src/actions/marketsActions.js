import { SET_MARKETS, SET_COMPANIES } from './types';
import axios from 'axios';

export function setMarkets(markets) {
  return {
    type: SET_MARKETS,
    markets
  };
}

export function setCompanies(companies) {
  return {
    type: SET_COMPANIES,
    companies
  };
}
export function fetchMarkets() {
  return dispatch => {
    return axios.get(process.env.API_URL + '/api/markets').then(res => {
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

export function fetchCompanies(url) {
  return dispatch => {
    debugger;
    return axios.get(url).then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setCompanies(res.data.companies));
    }, err => {

    });
  }
}