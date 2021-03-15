import HTTPClientBuilder, { AxiosInstance } from 'axios'

export default class StatusInvestClient {
  private httpClient: AxiosInstance

  constructor(baseURL: string = 'https://statusinvest.com.br') {
    this.httpClient = HTTPClientBuilder.create({
      baseURL
    })
  }

  async getAssetPriceByTicker(ticker: string): Promise<number> {
    const date = new Date()
    const today = date.toISOString().slice(0, 10)
    date.setDate(date.getDate() - 7)
    const yesterday = date.toISOString().slice(0, 10)

    const { data: { data: { prices } } } = await this.httpClient.get(`/category/tickerpricerange?ticker=${ticker}&start=${yesterday}&end=${today}`)

    return prices[prices.length - 1].price
  }
}