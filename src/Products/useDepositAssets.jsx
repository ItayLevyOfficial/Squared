import { useState } from 'react'
import { selectedChain } from '../chains'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import { useContract } from '../launchEvent/utils'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { usePoolContracts } from './useFetchBalance'
import { parseNumberDecimals } from '../launchEvent/commitAssetsModal/useCommitAssets'

export const useDepositAssets = () => {
  const [signer] = useConnectWallet()
  const [txHash, setTxHash] = useState()

  const ethPool = usePoolContracts(selectedChain.tokens[0], EthPoolAbi)
  const usdcPool = usePoolContracts(selectedChain.tokens[1], PoolAbi)
  const sqrdPool = usePoolContracts(selectedChain.tokens[2], PoolAbi)
  const sqrdLpPool = usePoolContracts(selectedChain.tokens[3], PoolAbi)
  const erc20Usdc = useContract(
    signer,
    selectedChain.tokens[1].address,
    erc20abi
  )
  const erc20Sqrd = useContract(
    signer,
    selectedChain.tokens[2].address,
    erc20abi
  )
  const erc20SqrdLp = useContract(
    signer,
    selectedChain.tokens[3].address,
    erc20abi
  )

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const tokenData = selectedChain.tokens[selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })

    switch (selectedTokenIndex) {
      case 0: {
        const tx = await ethPool.deposit(amount, {
          value: amount,
        })
        setTxHash(tx.hash)

        break
      }
      case 1: {
        await erc20Usdc.approve(
          selectedChain.tokens[1].poolContractAddress,
          amount
        )
        const tx = await usdcPool.deposit(amount)
        setTxHash(tx.hash)

        break
      }
      case 2: {
        await erc20Sqrd.approve(
          selectedChain.tokens[2].poolContractAddress,
          amount
        )
        const tx = await sqrdPool.deposit(amount)
        setTxHash(tx.hash)

        break
      }
      default: {
        await erc20SqrdLp.approve(
          selectedChain.tokens[3].poolContractAddress,
          amount
        )
        const tx = await sqrdLpPool.deposit(amount)
        setTxHash(tx.hash)

        break
      }
    }
    close()
  }

  return [commitAssets, txHash, setTxHash]
}
