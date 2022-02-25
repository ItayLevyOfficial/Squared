import { BigNumber } from 'ethers'
import { useContext, useState } from 'react'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { StageContext } from '../LaunchEventScreen'
import { EthPoolAbi } from '../../products/ABIs/EthPoolAbi'
import { selectedChain } from '../../chains'
import { erc20abi } from '../abis/erc20abi'
import { useConnectWallet } from '../useConnectWallet'
import { useContract } from '../utils'
import { usePoolContracts } from '../../products/useErc20Functions'

export const parseNumberDecimals = ({ amount, decimals }) => {
  const wholeSide = Math.floor(amount)
  const wholeSideFormatted = BigNumber.from(wholeSide).mul(
    BigNumber.from('10').pow(BigNumber.from(decimals))
  )
  const decimalSide = amount % 1
  if (decimalSide === 0) {
    return wholeSideFormatted
  } else {
    const decimalSideWhole = Math.round(decimalSide * 10 ** 6)
    const formattedDecimalSide = BigNumber.from(decimalSideWhole).mul(
      BigNumber.from('10').pow(BigNumber.from(decimals - 6))
    )
    return formattedDecimalSide.add(wholeSideFormatted)
  }
}

export const useCommitPoolAssets = (selectedToken, abi) => {
  const [signer] = useConnectWallet()
  const [txHash, setTxHash] = useState()
  const erc20 = useContract(signer, selectedToken.address, erc20abi)

  const roundContract = usePoolContracts(selectedToken, abi)

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const tokenData = selectedChain.tokens[+selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })

    if (selectedTokenIndex === 0) {
      const tx = await roundContract.deposit(amount, { value: amount })
      setTxHash(tx.hash)
    } else {
      await erc20.approve(selectedToken.poolContractAddress, amount)
      const tx = await roundContract.deposit(amount)
      setTxHash(tx.hash)
    }
  }
  return [commitAssets, txHash, setTxHash]
}

export const useCommitAssets = (selectedToken, abi = erc20abi) => {
  const [signer] = useConnectWallet()
  const [txHash, setTxHash] = useState()
  const erc20 = useContract(signer, selectedToken.address, erc20abi)

  const roundContract = usePoolContracts(selectedToken, abi)

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const tokenData = selectedChain.tokens[+selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })

    if (selectedTokenIndex === 0) {
      const tx = await roundContract.deposit(
        {
          token: tokenData.address,
          amount: amount,
        },
        [],
        { value: amount }
      )
      setTxHash(tx.hash)
    } else {
      await erc20.approve(selectedToken.poolContractAddress, amount)
      const tx = await roundContract.deposit(
        {
          token: tokenData.address,
          amount: amount,
        },
        [],
        {}
      )
      setTxHash(tx.hash)
    }
  }
  return [commitAssets, txHash, setTxHash]
}

//   export const useWithdrawAssets = (address, abi = erc20abi) => {
//     if (selectedTokenIndex === 0) {
//       const tx = await launchContract.withdraw(
//         { token: tokenData.address, amount: amount },
//         true
//       )
//       setTxHash(tx.hash)
//     } else {
//       const tx = await launchContract.withdraw(
//         { token: tokenData.address, amount: amount },
//         false
//       )
//       setTxHash(tx.hash)
//     }
//   }

//   return [commitAssets, txHash, setTxHash]
// }
