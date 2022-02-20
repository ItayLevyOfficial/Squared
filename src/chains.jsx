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
  usdcPoolContractAddress: '0x96F3Ce39Ad2BfDCf92C0F6E2C2CAbF83874660Fc',
  sqrdPoolContractAddress: '0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE',
  sqrdLpPoolContractAddress: '0x40a42Baf86Fc821f972Ad2aC878729063CeEF403',
  ethPoolContractAddress: '0x986aaa537b8cc170761FDAC6aC4fc7F9d8a20A8C',
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
      address: '0x0ed64d01D0B4B655E410EF1441dD677B695639E7',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      address: '0x5302E909d1e93e30F05B5D6Eea766363D14F9892',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      address: '0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7',
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
