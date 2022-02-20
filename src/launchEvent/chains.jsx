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
  usdcPoolContractAddress: '0x32EEce76C2C2e8758584A83Ee2F522D4788feA0f',
  sqrdPoolContractAddress: '0x6C2d83262fF84cBaDb3e416D527403135D757892',
  sqrdLpPoolContractAddress: '0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE',
  ethPoolContractAddress: '0xCA8c8688914e0F7096c920146cd0Ad85cD7Ae8b9',
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
      address: '0xfcDB4564c18A9134002b9771816092C9693622e3',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      address: '0x638A246F0Ec8883eF68280293FFE8Cfbabe61B44',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      address: '0x0ed64d01D0B4B655E410EF1441dD677B695639E7',
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
