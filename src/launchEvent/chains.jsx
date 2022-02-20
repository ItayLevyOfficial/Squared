import { EthereumIcon } from './icons/ethereum'
import React from 'react'
import { Usdc } from './icons/usdc'
import { Bnb } from './icons/BNB'
import { Busd } from './icons/busd'

const localChainConfig = {
  chainId: '0x539',
  chainName: 'hardhat',
  rpcUrls: ['http://127.0.0.1:8545/'],
  usdcPoolContractAddress: '0x40a42Baf86Fc821f972Ad2aC878729063CeEF403',
  ethPoolContractAddress: '0xB2b580ce436E6F77A5713D80887e14788Ef49c9A',
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
      address: '0x986aaa537b8cc170761FDAC6aC4fc7F9d8a20A8C',
      decimals: '6',
    },
    {
      name: 'SQRD PANCAKE LP',
      address: '0x6C2d83262fF84cBaDb3e416D527403135D757892',
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
    launchContractAddress: '0x23A0986323a06a0fdfc761B588F13e92d1263194',
    launchTime: 1644923469136,
    launchTokensAmount: 3_000_000,
    chainName: 'Binance Smart Chain Testnet',
    chainId: '0x61',
    tokens: [
      {
        name: 'BNB',
        icon: <Bnb />,
        decimals: 8,
        address: '0x5b3e2bc1da86ff6235d9ead4504d598cae77dbcb',
      },
      {
        name: 'BUSD',
        icon: <Busd />,
        decimals: 18,
        address: '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
      },
    ],
  },
  ethereum: localChainConfig,
}

export const selectedChain = chains.bsc
