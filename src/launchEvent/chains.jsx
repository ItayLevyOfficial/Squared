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
    launchContractAddress: '0xd6e1afe5cA8D00A2EFC01B89997abE2De47fdfAf',
    tokens: [
      {
        name: 'ETH',
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        decimals: '18'
      },
      {
        name: 'USDC',
        address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
        decimals: '6'
      },
    ],
  },
}

export const selectedChain = chains.ethereum
