import React from 'react'
import { hardhat } from './hardhat'
import DEVIcon from './glmrIcon.png'
import { Usdc } from '../launchEvent/icons/usdc'

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
  tokens: [{
    name: 'DEV',
    poolContractAddress: '0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B',
    address: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
    decimals: '18',
    icon: <img src={DEVIcon} width={30} />,
  },{
    name: 'USDC',
    poolContractAddress: '0x976fcd02f7C4773dd89C309fBF55D5923B4c98a1',
    address: '0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849',
    decimals: '6',
    icon: <Usdc />,
  },
  {
    name: 'SQRD',
    poolContractAddress: '0x19cEcCd6942ad38562Ee10bAfd44776ceB67e923',
    address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
    decimals: '6',
  },
  {
    name: 'SQRD LP',
    poolContractAddress: '0xD42912755319665397FF090fBB63B1a31aE87Cee',
    address: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
    decimals: '6',
  }]
}
