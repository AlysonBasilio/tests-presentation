/**
 * @jest-environment node
 */
import useAxiosRecordReplayAdapter from 'axios-record-replay-adapter'
import StatusInvestClient from './StatusInvestClient'

test('should return a mocked result', async () => {
  useAxiosRecordReplayAdapter()
  const statusInvestClient = new StatusInvestClient()
  const bbasPrice = await statusInvestClient.getAssetPriceByTicker('BBAS3')
  expect(bbasPrice).toBeGreaterThan(0)
})