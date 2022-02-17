import { EthereumIcon } from './icons/ethereum'
import React from 'react'
import { Usdc } from './icons/usdc'
import { Bnb } from './icons/BNB'
import { Busd } from './icons/busd'

const localChainConfig = {
  chainId: '0x539',
  chainName: 'hardhat',
  rpcUrls: ['http://127.0.0.1:8545/'],
  launchContractAddress: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
  launchTime: 1644612469136,
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
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
    ...localChainConfig,
    chainName: 'BSC',
    tokens: [
      { ...localChainConfig.tokens[0], name: 'BNB', icon: <Bnb /> },
      { ...localChainConfig.tokens[1], name: 'BUSD', icon: <Busd /> },
    ],
  },
  ethereum: localChainConfig,
}

export const selectedChain = chains.ethereum
