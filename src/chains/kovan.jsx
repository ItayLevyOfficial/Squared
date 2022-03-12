export const kovan = {
  chainId: '0x2A',
  chainName: 'kovan',
  approvalTime: 2,
  rpcUrls: ['https://kovan.infura.io/v3/fd7b0a37ee4249039dbf93ac592eb34a'],
  launchData: {
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0x1ac9a3D7ae101398C483ef3f44ddA5797024310f',
    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Etherscan', url: 'https://kovan.etherscan.io/' },
}
