import { useEffect, useState } from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from './abis/defiRoundAbi'
import { formatBigUsd } from './LaunchScreenBody'
import { provider } from './useConnectWallet'
import { useContract } from './utils'

export const useEventData = () => {
  const launchContract = useContract(
    provider,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )
  const [totalCommitments, setTotalCommitments] = useState(0)
  const [maxTotalCommitments, setMaxTotalCommitments] = useState(0)

  useEffect(() => {
    if (launchContract) {
      launchContract.getMaxTotalValue().then((maxTotalValue) => {
        setMaxTotalCommitments(formatBigUsd(maxTotalValue))
      })
    }
  }, [launchContract])

  useEffect(() => {
    if (launchContract) {
      launchContract.totalValue().then((response) => {
        setTotalCommitments(formatBigUsd(response))
      })
    }
  }, [launchContract])

  const minSqrdPrice = '2.00'
  const maxSqrdPrice = '8.00'
  const minSqrdSold = 6000000
  const sqrdPrice =
    totalCommitments < minSqrdSold
      ? minSqrdPrice
      : totalCommitments > maxTotalCommitments / 2
      ? maxSqrdPrice
      : (totalCommitments / selectedChain.launchData.launchTokensAmount).toFixed(2)

  return [totalCommitments, maxTotalCommitments, sqrdPrice]
}
