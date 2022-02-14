const chains = {
  fuse: {
    chainId: '0x7a',
    chainName: 'Fuse',
    rpcUrls: ['https://rpc.fuse.io/'],
  },
  ethereum: {
    chainId: '0x539',
    chainName: 'hardhat',
    rpcUrls: ['http://127.0.0.1:8545/'],
    nativeToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    stableToken: '0x6F6f570F45833E249e27022648a26F4076F48f78',
    launchContractAddress: '0xF32D39ff9f6Aa7a7A64d7a4F00a54826Ef791a55',
    tokens: [
      {
        name: 'ETH',
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        decimals: '18'
      },
      {
        name: 'USDC',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: '6'
      },
    ],
  },
}

export const selectedChain = chains.ethereum
