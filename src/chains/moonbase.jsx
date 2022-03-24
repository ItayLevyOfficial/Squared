import { hardhat } from './hardhat'

export const moonbase = {
  ...hardhat,
  chainId: '0x507',
  chainName: 'moonbase',
  approvalTime: 2,
  rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'],
  scan: {
    name: 'Moonbase Explorer',
    url: 'https://moonbase-blockscout.testnet.moonbeam.network',
  },
}
