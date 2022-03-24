import React from 'react'
import { hardhat } from './hardhat'
import DEVIcon from './glmrIcon.png'

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
  }, hardhat.tokens[1]],
}
