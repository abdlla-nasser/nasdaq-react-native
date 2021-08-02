import { Context } from "./index"
export const getStockDetails = async ({ state, effects }: Context, { ticker, date }: { ticker: string; date: string }) => {
  state.isLoadingStock = true;
  let stock = await effects.getStock(ticker, date)
  state.stocksDetails = { ...state.stocksDetails, [stock.ticker]: { ...stock } }
  state.isLoadingStock = false
}
export const getStocks = async({ state, effects }: Context) => {
  state.isLoadingStocks = true;
  let { nextUrl, stocks } = await effects.getStocks()
  console.log("overmind", stocks)
  state.stocks = stocks;
  state.nextUrl = nextUrl;
  state.isLoadingStocks = false;
}
export const getNextStocks = async ({ state, effects }: Context) => {
  state.isLoadingStocks = true;
  let { nextUrl, stocks } = await effects.getStocks(state.nextUrl)
  state.stocks = state.stocks.concat(stocks)
  state.nextUrl = nextUrl
  state.isLoadingStocks = false;
}
export const setSearchTerm = ({ state }: Context, searchTerm: string) => {
  state.search = searchTerm
  if (searchTerm.length > 3) {
    // search
  }
}