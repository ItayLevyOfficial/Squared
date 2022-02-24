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
    launchContractAddress: '0x6F6f570F45833E249e27022648a26F4076F48f78',
    launchTime: 1645545947422,
    lastLookStart: 1645595947422,

    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Etherscan', url: 'https://etherscan.io/' },
  tokens: [
    {
      name: 'ETH',
      poolContractAddress: '0x19cEcCd6942ad38562Ee10bAfd44776ceB67e923',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      poolContractAddress: '0x32EEce76C2C2e8758584A83Ee2F522D4788feA0f',
      address: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      poolContractAddress: '0x927b167526bAbB9be047421db732C663a0b77B11',
      address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      poolContractAddress: '0xfcDB4564c18A9134002b9771816092C9693622e3',
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
