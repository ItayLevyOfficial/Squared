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
    launchContractAddress: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
    poolContractAddress: '0xd6e1afe5cA8D00A2EFC01B89997abE2De47fdfAf',
    ethPoolContractAddress: '0xF32D39ff9f6Aa7a7A64d7a4F00a54826Ef791a55',
    managerContractAddress: '0x99dBE4AEa58E518C50a1c04aE9b48C9F6354612f',
    launchTime: 1644612469136,
    tokens: [
      {
        id: 0,
        name: 'ETH',
        symbol: 'ETH',
        address: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
        decimals: '18',
      },
      {
        id: 1,
        name: 'USDC',
        symbol: 'USDC',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: '6',
      },
      {
        id: 2,
        name: 'SQRD',
        symbol: 'SQRD',
        address: '0xCA8c8688914e0F7096c920146cd0Ad85cD7Ae8b9',
        decimals: '6',
      },
      {
        id: 3,
        name: 'SQRD VOLTAGE LP',
        symbol: 'SQRD_LP',
        address: '0x6F6f570F45833E249e27022648a26F4076F48f78',
        decimals: '6',
      },
    ],
  },
}

export const selectedChain = chains.ethereum
