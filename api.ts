import axios from "axios";
const axiosService = axios.create({
  baseURL: 'https://api.polygon.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer aPi5TGtp_WLejz_xXaBTU1uS9NCP1BGJ"
  },
})
export async function getStock(ticker: String, date: String) {
  let details = await axiosService.get(`v1/meta/symbols/${ticker}/company`).then(res => {
    return res.data
  })
  let openClose = await axiosService.get(`v1/open-close/${ticker}/${date}?adjusted=true`).then(res => res.data)
  console.log({ ...details, ...openClose})
  return { ...details, ...openClose}
}
export async function getStocks(next?: string) {
  let res
  if (next) {
    res = await axiosService.get(next.split("o/")[1])
      .then(res => res.data)
    let nextUrl = res["next_url"]
    let stocks = res.results
    return {nextUrl, stocks}
  } else {
    res = await axiosService.get(`v3/reference/tickers?market=stocks&exchange=XNAS&active=true&sort=ticker&order=asc&limit=10`)
      .then(res => {
        console.log(res.data)
        return res.data
      })
  }
  let nextUrl = res["next_url"]
  let stocks = res.results
  return {nextUrl, stocks}
}