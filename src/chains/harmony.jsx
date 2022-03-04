import { hardhat } from './hardhat'

export const harmony = {
  ...hardhat,
  tokens: [
    {
      ...hardhat.tokens[0],
      name: 'ONE',
    },
    {
      ...hardhat.tokens[1],
      name: 'oneUSD',
    },
  ],
}
