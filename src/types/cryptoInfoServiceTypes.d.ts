export type CryptoInfo = {
  id: string,
  symbol: string,
  name: string,
  current_price: string,
  price_change_percentage_24h: string,
  total_volume: string,
  high_24h: string,
  low_24h: string,
  circulating_supply: string,
  market_cap: string
}

export type MarketData = CryptoInfo[]

export type MarketChart = {
  time: Date, price: number
}[]
