import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useContract } from '../launchEvent/utils'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { selectedChain } from '../chains'

export const usePoolContracts = () => {
  const [signer, ,] = useConnectWallet()
  const ethPoolContract = useContract(
    signer,
    selectedChain.tokens[0].ethPoolContractAddress,
    EthPoolAbi
  )
  const usdcPoolContract = useContract(
    signer,
    selectedChain.tokens[1].usdcPoolContractAddress,
    PoolAbi
  )
  const sqrdPoolContract = useContract(
    signer,
    selectedChain.tokens[2].sqrdPoolContractAddress,
    PoolAbi
  )
  const sqrdLpPoolContract = useContract(
    signer,
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
