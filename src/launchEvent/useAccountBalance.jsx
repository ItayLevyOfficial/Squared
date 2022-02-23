import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from './abis/defiRoundAbi'
import { formatBigUsd } from './LaunchScreenBody'
import { provider, useConnectWallet } from './useConnectWallet'
import { useContract } from './utils'
import { useEventListener } from './useEventListener'

export const useAccountBalance = () => {
  const [, , walletAddress] = useConnectWallet()
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [balance, setBalance] = useState(0)

  const readLaunchContract = useContract(
    provider,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )

  const fetchBalance = useCallback(async () => {
    const accountToken = await readLaunchContract.accountToken(walletAddress)
    setDepositedToken(accountToken)
    if (accountToken !== ethers.constants.AddressZero) {
      const newBalance = await readLaunchContract.accountBalance(walletAddress)
      setBalance(formatBigUsd(newBalance))
    }
  }, [walletAddress, readLaunchContract])

  const fetchBalanceIfNeeded = useCallback(
    async (address) => {
      if (address === walletAddress) {
        await fetchBalance()
      }
    },
    [fetchBalance, walletAddress]
  )

  useEffect(() => {
    if (readLaunchContract && walletAddress) {
      fetchBalance()
    }
  }, [walletAddress, fetchBalance, readLaunchContract])

  useEventListener({
    contract: readLaunchContract,
    eventName: 'Deposited',
    handler: fetchBalance,
  })

  useEffect(() => {
    if (readLaunchContract) {
      readLaunchContract.on('Withdrawn', fetchBalanceIfNeeded)
      return () =>
        readLaunchContract.removeListener('Withdrawn', fetchBalanceIfNeeded)
    }
  }, [fetchBalanceIfNeeded, readLaunchContract])

  return [balance, depositedToken]
}
