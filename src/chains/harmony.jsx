import { Usdc } from '../launchEvent/icons/usdc'
import HarmonyIcon from './oneLogo.svg'

export const harmony = {
  chainId: '0x6357D2E0',
  chainName: 'Harmony Testnet',
  launchData: {
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0x33Aa3FC0DeBaa504e7b83C29c7609F4082A5FFc0',
    launchTokensAmount: 3_000_000,
  },
  tokens: [
    {
      name: 'ONE',
      icon: <img src={HarmonyIcon} width={30} />,
      address: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
      decimals: 18,
    },
    {
      name: 'USDC',
      icon: <Usdc />,
      address: '0x985458e523db3d53125813ed68c274899e9dfab4',
      decimals: 6,
    },
  ],
}
