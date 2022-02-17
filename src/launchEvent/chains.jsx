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
  poolContractAddress: '0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7',
  ethPoolContractAddress: '0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849',
  managerContractAddress: '0xfcDB4564c18A9134002b9771816092C9693622e3',
  launchTime: 1644612469136,
  launchTokensAmount: 3_000_000,
  tokens: [
    {
      name: 'ETH',
      symbol: 'ETH',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      symbol: 'USDC',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      symbol: 'SQRD',
      address: '0x32EEce76C2C2e8758584A83Ee2F522D4788feA0f',
      decimals: '6',
    },
    {
      name: 'SQRD PANCAKE LP',
      symbol: 'SQRD_LP',
      address: '0x927b167526bAbB9be047421db732C663a0b77B11',
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
