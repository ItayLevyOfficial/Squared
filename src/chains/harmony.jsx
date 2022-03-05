import { hardhat } from './hardhat'
import HarmonyIcon from './oneLogo.svg'
import terraUSD from './terraUSD.png'

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
      name: 'UST',
      icon: <img src={terraUSD} width={30}/>
    },
  ],
}
