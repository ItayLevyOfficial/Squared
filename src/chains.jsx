import { EthereumIcon } from './launchEvent/icons/ethereum'
import React from 'react'
import { Usdc } from './launchEvent/icons/usdc'
import { Bnb } from './launchEvent/icons/BNB'
import { Busd } from './launchEvent/icons/busd'

const localChainConfig = {
  chainId: '0x539',
  chainName: 'hardhat',
  rpcUrls: ['http://127.0.0.1:8545/'],
  launchContractAddress: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
  usdcPoolContractAddress: '0xD42912755319665397FF090fBB63B1a31aE87Cee',
  sqrdPoolContractAddress: '0x976fcd02f7C4773dd89C309fBF55D5923B4c98a1',
  sqrdLpPoolContractAddress: '0x19cEcCd6942ad38562Ee10bAfd44776ceB67e923',
  ethPoolContractAddress: '0xfcDB4564c18A9134002b9771816092C9693622e3',
  launchTime: 1645112469136,
  launchTokensAmount: 3_000_000,
  tokens: [
    {
      name: 'ETH',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      address: '0x5FeaeBfB4439F3516c74939A9D04e95AFE82C4ae',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      address: '0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      address: '0xCA8c8688914e0F7096c920146cd0Ad85cD7Ae8b9',
      decimals: '6',
    },
  ],
}

const chains = {
  fuse: {
    ...localChainConfig,
    // chainId: '0x7a',
    chainName: 'Fuse',
    // rpcUrls: ['https://rpc.fuse.io/'],
  },
  bsc: {
    rpcUrls: [
      'https://speedy-nodes-nyc.moralis.io/2f032afc060e364659b8758a/bsc/testnet',
    ],
    launchContractAddress: '0xe6315fd1BAb71B51D1ccCC8a2481C9098fBe2984',
    launchTime: 1644923469136,
    launchTokensAmount: 3_000_000,
    chainName: 'Binance Smart Chain Testnet',
    chainId: '0x61',
    tokens: [
      {
        name: 'BNB',
        icon: <Bnb />,
        decimals: 8,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      },
      {
        name: 'BUSD',
        icon: <Busd />,
        decimals: 18,
        address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      },
    ],
  },
  ethereum: localChainConfig,
}

export const selectedChain = chains.ethereum
