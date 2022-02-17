import { BASE_URL } from "./constants";

export function getMarketsData() {
  return fetch(
    `${BASE_URL}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  ).then((res) => res.json());
}
export function getCoinDetails(id) {
    return fetch(
      `${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    ).then((res) => res.json());
  }
