const baseURL = 'https://api.coingecko.com/api/v3';

const getPrice = async (cryptoId: string, vsCurrency: string): Promise<JSON> => {
  const data = await fetch(`${baseURL}/simple/price?ids=${cryptoId}&vs_currencies=${vsCurrency}`)
    .then((response) => response.json());

  return data;
};

const getMarketChart = async (
  cryptoId: string,
  vsCurrency: string,
  days: number,
  interval: 'daily' | 'hourly' = 'hourly',
): Promise<JSON> => {
  const data = await fetch(`${baseURL}/coins/${cryptoId}/market_chart?vs_currency=${vsCurrency}&days=${days}&interval=${interval}`)
    .then((response) => response.json());

  return data;
};

const cryptoInfoService = {
  getPrice,
  getMarketChart,
};

export default cryptoInfoService;
