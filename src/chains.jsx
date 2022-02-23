import React from 'react'
import { Bnb } from './launchEvent/icons/BNB'
import { Busd } from './launchEvent/icons/busd'
import { EthereumIcon } from './launchEvent/icons/ethereum'
import { Usdc } from './launchEvent/icons/usdc'

const localChainConfig = {
  chainId: '0x539',
  chainName: 'hardhat',
  approvalTime: 2,
  rpcUrls: ['http://127.0.0.1:8545/'],
  launchData: {
    launchContractAddress: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
    launchTime: 1645545947422,
    lastLookStart: 1645545947422,
    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Etherscan', url: 'https://etherscan.io/' },
  tokens: [
    {
      name: 'ETH',
      ethPoolContractAddress: '0x99dBE4AEa58E518C50a1c04aE9b48C9F6354612f',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      usdcPoolContractAddress: '0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B',
      address: '0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      sqrdPoolContractAddress: '0x5FeaeBfB4439F3516c74939A9D04e95AFE82C4ae',
      address: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      sqrdLpPoolContractAddress: '0xCA8c8688914e0F7096c920146cd0Ad85cD7Ae8b9',
      address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
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
    launchData: {
      launchContractAddress: '0x2B22E8545b2f49b1D06c5928Fb17141A95153d6c',
      launchTime: 1645567884179,
      lastLookStart: 1645567884179,
      launchTokensAmount: 3_000_000,
    },
    scan: { name: 'BscScan', url: 'https://testnet.bscscan.com/' },
    chainName: 'Binance Smart Chain Testnet',
    chainId: '0x61',
    tokens: [
      {
        name: 'BNB',
        icon: <Bnb />,
        decimals: 18,
        address: '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
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

export const selectedChain = chains.ethereum
