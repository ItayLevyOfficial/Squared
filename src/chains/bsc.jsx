import { Bnb } from '../launchEvent/icons/BNB'
import { Busd } from '../launchEvent/icons/busd'

export const bsc = {
  rpcUrls: [
    'https://speedy-nodes-nyc.moralis.io/2f032afc060e364659b8758a/bsc/testnet',
  ],
  launchData: {
    launchContractAddress: '0x2B22E8545b2f49b1D06c5928Fb17141A95153d6c',
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
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
      poolContractAddress: tokenAddress.nativeTokenPoolAddress,
    },
    {
      name: 'BUSD',
      icon: <Busd />,
      decimals: 18,
      address: '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
      poolContractAddress: tokenAddress.stableTokenPoolAddress,
    },
    {
      name: 'SQRD',
      poolContractAddress: tokenAddress.sqrdPoolAddress,
      address: tokenAddress.sqrdTokenAddress,
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      poolContractAddress: tokenAddress.sqrdLpPoolAddress,
      address: tokenAddress.sqrdLpTokenAddress,
      decimals: '6',
    },
  ],
}
