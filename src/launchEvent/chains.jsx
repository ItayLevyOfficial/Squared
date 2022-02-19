import { EthereumIcon } from './icons/ethereum'
import React from 'react'
import { Usdc } from './icons/usdc'
import { Bnb } from './icons/BNB'
import { Busd } from './icons/busd'

const localChainConfig = {
  chainId: '0x539',
  chainName: 'hardhat',
  rpcUrls: ['http://127.0.0.1:8545/'],
  launchContractAddress: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
  launchTime: 1644923469136,
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
      address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // replace with official address
      decimals: '6',
    },
    {
      name: 'SQRD UNISWAP LP',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // replace with official address
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
    rpcUrls: ['https://speedy-nodes-nyc.moralis.io/2f032afc060e364659b8758a/bsc/testnet'],
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
