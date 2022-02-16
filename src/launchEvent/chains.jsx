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
    launchContractAddress: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
    launchTime: 1644612469136,
    tokens: [
      {
        id: 0,
        name: 'ETH',
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        decimals: '18',
      },
      {
        id: 1,
        name: 'USDC',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: '6',
      },
      {
        id: 2,
        name: 'PUFF',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // replace with official address
        decimals: '6',
      },
      {
        id: 3,
        name: 'PUFF VOLTAGE LP',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // replace with official address
        decimals: '6',
      },
    ],
  },
}

export const selectedChain = chains.ethereum
