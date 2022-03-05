import { Usdc } from '../launchEvent/icons/usdc'
import HarmonyIcon from './oneLogo.svg'

export const harmony = {
  chainId: '0x6357D2E0',
  chainName: 'Harmony Testnet',
  launchData: {
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: 'one17ljvza5zh5yjph38dlfde2am0a8r0j4kmct5gq',
    launchTokensAmount: 3_000_000,
  },
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
