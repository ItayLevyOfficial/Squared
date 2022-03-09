import { EthereumIcon } from '../launchEvent/icons/ethereum'
import { Usdc } from '../launchEvent/icons/usdc'
import { tokenAddress } from './tokenAddress'

export const hardhat = {
  chainId: '0x539',
  chainName: 'hardhat',
  approvalTime: 2,
  rpcUrls: ['http://127.0.0.1:8545/'],
  launchData: {
    // TODO - before launch, update the the actual launch time.
    launchTime: Date.now() - 60 * 1000 * 60 * 12,
    lastLookStart: Date.now() - 60 * 1000 * 60 * 12,
    launchContractAddress: '0xF32D39ff9f6Aa7a7A64d7a4F00a54826Ef791a55',
    launchTokensAmount: 3_000_000,
  },
  scan: { name: 'Etherscan', url: 'https://etherscan.io/' },
  tokens: [
    {
      name: 'ETH',
      poolContractAddress: tokenAddress.nativeTokenPoolAddress,
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: '18',
      icon: <EthereumIcon />,
    },
    {
      name: 'USDC',
      poolContractAddress: tokenAddress.stableTokenPoolAddress,
      address: '0x40918Ba7f132E0aCba2CE4de4c4baF9BD2D7D849',
      decimals: '6',
      icon: <Usdc />,
    },
    {
      name: 'SQRD',
      poolContractAddress: tokenAddress.sqrdPoolAddress,
      address: tokenAddress.sqrdTokenAddress,
      decimals: '6',
    },
    {
      name: 'SQRD LP',
      poolContractAddress: tokenAddress.sqrdLpPoolAddress,
      address: tokenAddress.sqrdLpTokenAddress,
      decimals: '6',
    },
  ],
}
