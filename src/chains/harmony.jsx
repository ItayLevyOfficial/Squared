import { Usdc } from '../launchEvent/icons/usdc'
import { hardhat } from './hardhat'
import HarmonyIcon from './oneLogo.svg'

export const harmony = {
  ...hardhat,
  chainId: '0x6357D2E0',
  chainName: 'Harmony Testnet',
  tokens: [
    {
      name: 'ONE',
      icon: <img src={HarmonyIcon} width={30} />,
      address: 'one1eanyppa9hvpr0g966e6zs5hvdjxkngn6jtulua',
      decimals: 18,
    },
    {
      name: 'USDC',
      icon: <Usdc />,
      address: 'one1np293efrmv74xyjcz0kk3sn53x0fm745f2hsuc',
      decimals: 6,
    },
  ],
}
