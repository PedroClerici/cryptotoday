export type Cryptocurrency = {
  id: string,
  symbol: string,
  name: string,
};

export const cryptocurrenciesList: Cryptocurrency[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
  },
  {
    id: 'litecoin',
    symbol: 'ltc',
    name: 'Litecoin',
  },
  {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USD Coin',
  },
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
  },
  {
    id: 'monero',
    symbol: 'xmr',
    name: 'Monero',
  },
  {
    id: 'solana',
    symbol: 'sol',
    name: 'Solana',
  },
  {
    id: 'ripple',
    symbol: 'xrp',
    name: 'XRP',
  },
  {
    id: 'dai',
    symbol: 'dai',
    name: 'Dai',
  },
  {
    id: 'matic-network',
    symbol: 'matic',
    name: 'Polygon',
  },
  {
    id: 'stellar',
    symbol: 'xlm',
    name: 'Stellar',
  },
];

export default cryptocurrenciesList;
