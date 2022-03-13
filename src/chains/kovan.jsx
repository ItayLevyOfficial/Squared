import { hardhat } from './hardhat'

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
  tokens: [
    {
      ...hardhat.tokens[0],
      name: 'KETH',
      address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
      poolContractAddress: '0x8A35F422B4D343b562799b95b96f4d31fE81b15b'
    },
    {
      ...hardhat.tokens[1],
      address: '0xdCFaB8057d08634279f8201b55d311c2a67897D2',
      poolContractAddress: '0x4caeaB5547d1FD5A6685E7A52e4a900d779B767f'
    },
    {
      ...hardhat.tokens[2],
      address: '0x48B51bC25Aa41C1c6CeBc1797BF4FF5411354E5E',
      poolContractAddress: '0x3e771689A5Bcc7d56cedbb0a202c9fe0E68B93f4'
    },{
      ...hardhat.tokens[3],
      address: '0x0a863a4A66fBf86fb4D1F737945C836F571C403F',
      poolContractAddress: '0x22cC13e2b3740B0F23E37891Bd551572A25b9D6C'
    }
  ],
}
