const chains = {
  fuse: {
    chainId: '0x7a',
    chainName: 'Fuse',
    rpcUrls: ['https://rpc.fuse.io/']
  }, 
  hardhat: {
    chainId: '7A69',
    chainName: 'hardhat',
    rpcUrls: ['http://127.0.0.1:8545/']
  }
}

export const selectedChain = chains.hardhat