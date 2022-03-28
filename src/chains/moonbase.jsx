import React from 'react'
import { Usdc } from '../launchEvent/icons/usdc'
import DEVIcon from './glmrIcon.png'

export const moonbase = {
  chainId: '0x507',
  chainName: 'Moonbase',
  approvalTime: 2,
  rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'],
  scan: {
    name: 'Moonbase Explorer',
    url: 'https://moonbase-blockscout.testnet.moonbeam.network',
  },
  launchData: {
    // TODO: before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0x1ac9a3D7ae101398C483ef3f44ddA5797024310f',
    launchTokensAmount: 3_000_000,
  },
  tokens: [
    {
      name: 'DEV',
      poolContractAddress: '0x8A35F422B4D343b562799b95b96f4d31fE81b15b',
      address: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
      decimals: '18',
      icon: <img src={DEVIcon} width={30} />,
    },
    {
      name: 'USDC',
      poolContractAddress: '0x4caeaB5547d1FD5A6685E7A52e4a900d779B767f',
      address: '0x0a863a4A66fBf86fb4D1F737945C836F571C403F',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      poolContractAddress: '0x3e771689A5Bcc7d56cedbb0a202c9fe0E68B93f4',
      address: '0x4314014f95A726B82A42cBCC6D9FAeC2851b54e8',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      poolContractAddress: '0x22cC13e2b3740B0F23E37891Bd551572A25b9D6C',
      address: '0x48B51bC25Aa41C1c6CeBc1797BF4FF5411354E5E',
      decimals: '6',
    },
  ],
}
