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
    launchContractAddress: '0xF32D39ff9f6Aa7a7A64d7a4F00a54826Ef791a55',
    launchTime: 1645112469136,
    lastLookStart: 1645550203022,
    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Etherscan', url: 'https://etherscan.io/' },
  tokens: [
    {
      name: 'ETH',
      ethPoolContractAddress: '0x976fcd02f7C4773dd89C309fBF55D5923B4c98a1',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      usdcPoolContractAddress: '0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B',
      address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      sqrdPoolContractAddress: '0x19cEcCd6942ad38562Ee10bAfd44776ceB67e923',
      address: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      sqrdLpPoolContractAddress: '0xD42912755319665397FF090fBB63B1a31aE87Cee',
      address: '0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849',
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
      launchContractAddress: '0xe6315fd1BAb71B51D1ccCC8a2481C9098fBe2984',
      launchTime: 1644923469136,
      launchTokensAmount: 3_000_000,
    },
    ...localChainConfig,
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

export const selectedChain = chains.bsc
