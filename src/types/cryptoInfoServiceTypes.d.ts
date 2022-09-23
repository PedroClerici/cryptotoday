export type Price = {
  [cryptocurrency: string]: {
    [vsCurrency: string]: number
  }
}

export type CryptoInfo = {
  total_volume: string,
  high_24h: string,
  low_24h: string,
  circulating_supply: string,
  market_cap: string
}

export type MarketData = {
  'id': string,
  'symbol': string,
  'name': string,
  'current_price': number,
  'market_cap': number,
  'circulating_supply': number,
  'price_change_percentage_24h': string,
}[]

export type MarketChart = {
  time: Date, price: number
}[]
