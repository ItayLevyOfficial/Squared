import { hardhat } from './hardhat'
import HarmonyIcon from './oneLogo.svg'
export const harmony = {
  ...hardhat,
  tokens: [
    {
      ...hardhat.tokens[0],
      name: 'ONE',
      icon: <img src={HarmonyIcon} width={30}/>
    },
    {
      ...hardhat.tokens[1],
      name: 'oneUSD',
    },
  ],
}
