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
    poolContractAddress: '0x19cEcCd6942ad38562Ee10bAfd44776ceB67e923',
    ethPoolContractAddress: '0xD42912755319665397FF090fBB63B1a31aE87Cee',
    managerContractAddress: '0xfcDB4564c18A9134002b9771816092C9693622e3',
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
        address: '0x32EEce76C2C2e8758584A83Ee2F522D4788feA0f',
        decimals: '6',
      },
      {
        id: 3,
        name: 'SQRD VOLTAGE LP',
        symbol: 'SQRD_LP',
        address: '0x927b167526bAbB9be047421db732C663a0b77B11',
        decimals: '6',
      },
    ],
  },
}

export const selectedChain = chains.ethereum
