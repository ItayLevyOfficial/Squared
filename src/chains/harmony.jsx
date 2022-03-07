import { Usdc } from '../launchEvent/icons/usdc'
import HarmonyIcon from './oneLogo.svg'

export const harmony = {
  chainId: '0x6357D2E0',
  chainName: 'Harmony Testnet',
  launchData: {
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0xc6a985AD26D2034e500ad6da9a4827dcAfA34D8a',
    launchTokensAmount: 3_000_000,
  },
  tokens: [
    {
      name: 'ONE',
      icon: <img src={HarmonyIcon} width={30} />,
      address: '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
      decimals: 18,
    },
    {
      name: 'USDC',
      icon: <Usdc />,
      address: '0xa62d9d5ce0295f58c8185c057c668262d6549d10',
      decimals: 6,
    },
  ],
}
