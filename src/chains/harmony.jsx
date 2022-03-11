import { Usdc } from '../launchEvent/icons/usdc'
import HarmonyIcon from './oneLogo.svg'

export const harmony = {
  chainId: '0x6357D2E0',
  chainName: 'Harmony Testnet',
  approvalTime: 2,
  launchData: {
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0xc6a985AD26D2034e500ad6da9a4827dcAfA34D8a',
    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Harmony Block Explorer', url: 'https://explorer.pops.one/' },
  tokens: [
    {
      name: 'ONE',
      icon: <img src={HarmonyIcon} width={30} />,
      address: '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
      decimals: 18,
      poolContractAddress: '0x25d09DC80fe61caA0e973a894417798f7f13D721',
    },
    {
      name: 'USDC',
      icon: <Usdc />,
      address: '0xa62d9d5ce0295f58c8185c057c668262d6549d10',
      decimals: 6,
      poolContractAddress: '0xBd4442b1B312eEf50f799126bf663401Fa947899',
    },
    {
      name: 'SQRD',
      poolContractAddress: '0x32070a8aa4676d17655c6EaD1B8Aa609618c58D4',
      address: '0xC6F245a5400E9e7ED41975280914011138236fDF',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      poolContractAddress: '0xCe92B07031B31f5549991401Ec6B4744A010012D',
      address: '0xF0d64c8fA29B80DBa5d5ec3d0De169a9d19e283b',
      decimals: '6',
    },
  ],
}
