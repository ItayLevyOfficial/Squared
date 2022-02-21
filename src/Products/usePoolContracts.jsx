import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useContract } from '../launchEvent/utils'
import { provider } from '../launchEvent/useConnectWallet'
import { selectedChain } from '../chains'

export const usePoolContracts = () => {
  const ethPoolContract = useContract(
    provider,
    selectedChain.tokens[0].ethPoolContractAddress,
    EthPoolAbi
  )
  const usdcPoolContract = useContract(
    provider,
    selectedChain.tokens[1].usdcPoolContractAddress,
    PoolAbi
  )
  const sqrdPoolContract = useContract(
    provider,
    selectedChain.tokens[2].sqrdPoolContractAddress,
    PoolAbi
  )
  const sqrdLpPoolContract = useContract(
    provider,
    selectedChain.tokens[3].sqrdLpPoolContractAddress,
    PoolAbi
  )

  return [
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ]
}
