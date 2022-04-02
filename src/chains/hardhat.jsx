import { EthereumIcon } from '../launchEvent/icons/ethereum'
import { Usdc } from '../launchEvent/icons/usdc'

export const hardhat = {
  chainId: '0x539',
  chainName: 'hardhat',
  approvalTime: 2,
  rpcUrls: ['http://127.0.0.1:8545/'],
  launchData: {
    // TODO: before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0xF32D39ff9f6Aa7a7A64d7a4F00a54826Ef791a55',
    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Etherscan', url: 'https://etherscan.io/' },
  tokens: [
    {
      name: 'ETH',
      poolContractAddress: '0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      poolContractAddress: '0x976fcd02f7C4773dd89C309fBF55D5923B4c98a1',
      address: '0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      poolContractAddress: '0x19cEcCd6942ad38562Ee10bAfd44776ceB67e923',
      address: '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C',
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      poolContractAddress: '0xD42912755319665397FF090fBB63B1a31aE87Cee',
      address: '0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8',
      decimals: '6',
    },
  ],
}
