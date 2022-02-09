const chains = {
  fuse: {
    chainId: '0x7a',
    chainName: 'Fuse',
    rpcUrls: ['https://rpc.fuse.io/']
  }, 
  hardhat: {
    chainId: '7A69',
    chainName: 'hardhat',
    rpcUrls: ['http://127.0.0.1:8545/'],
    nativeToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    stableToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  }
}

export const selectedChain = chains.hardhat