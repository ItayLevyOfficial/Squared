import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from './abis/defiRoundAbi'
import { formatBigUsd } from './LaunchScreenBody'
import { provider, useConnectWallet } from './useConnectWallet'
import { useContract } from './utils'

export const useAccountBalance = () => {
  const [, , address] = useConnectWallet()
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [balance, setBalance] = useState(0)

  const readLaunchContract = useContract(
    provider,
    selectedChain.launchContractAddress,
    launchContractAbi
  )

  const fetchBalance = useCallback(async () => {
    const accountToken = await readLaunchContract.accountToken(address)
    setDepositedToken(accountToken)
    if (accountToken !== ethers.constants.AddressZero) {
      const newBalance = await readLaunchContract.accountBalance(address)
      setBalance(formatBigUsd(newBalance))
    }
  }, [address, readLaunchContract])

  useEffect(() => {
    if (readLaunchContract && address) {
      fetchBalance()
    }
  }, [address, fetchBalance, readLaunchContract])

  useEffect(() => {
    if (readLaunchContract) {
      readLaunchContract.on('Deposited', fetchBalance)
      return () => readLaunchContract.removeListener('Deposited', fetchBalance)
    }
  }, [fetchBalance, readLaunchContract])

  return [balance, depositedToken]
}
