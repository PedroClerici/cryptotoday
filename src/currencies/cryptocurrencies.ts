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
  {
    id: 'cardano',
    symbol: 'ada',
    name: 'Cardano',
  },
  {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
  },
  {
    id: 'avalanche-2',
    symbol: 'avax',
    name: 'Avalanche',
  },
  {
    id: 'wrapped-bitcoin',
    symbol: 'wbtc',
    name: 'Wrapped Bitcoin',
  },
  {
    id: 'ethereum-classic',
    symbol: 'etc',
    name: 'Ethereum Classic',
  },
  {
    id: 'cosmos',
    symbol: 'atom',
    name: 'Cosmos',
  },
  {
    id: 'leo',
    symbol: 'leo',
    name: 'Leo',
  },
  {
    id: 'uniswap',
    symbol: 'uni',
    name: 'Uniswap',
  },
  {
    id: 'chainlink',
    symbol: 'link',
    name: 'Chainlink',
  },
];

export default cryptocurrenciesList;
