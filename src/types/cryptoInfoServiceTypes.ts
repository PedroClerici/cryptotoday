export type Price = {
  [cryptocurrency: string]: {
    [vsCurrency: string]: number
  }
}

export type MarketData = {
  'id': string,
  'symbol': string,
  'name': string,
  'current_price': number,
  'market_cap': number,
  'circulating_supply': number,
  'price_change_percentage_24h': number,
}[]

export type PopularCryptoData = {
  name: string
  symbol: string
  price: number
  priceChangePercentage: number
}

export type MarketChart = {
  'prices': [number, number][]
}
