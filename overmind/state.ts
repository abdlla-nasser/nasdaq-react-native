type Stock = {
  active: boolean,
  cik: string,
  composite_figi: string,
  currency_name: string,
  last_updated_utc: string,
  locale: string,
  market: string,
  name: string,
  primary_exchange: string,
  share_class_figi: string
  ticker: string;
  type: string;
}
export type State = {
  isLoadingStock: boolean;
  isLoadingStocks: boolean;
  stocks: Stock[];
  stocksDetails: {
    [key: string]: Stock
  };
  search: string;
  nextUrl: string
}
export const state: State = {
  isLoadingStocks: false,
  isLoadingStock: false,
  stocks: [],
  stocksDetails: {},
  search: "",
  nextUrl: "",
}