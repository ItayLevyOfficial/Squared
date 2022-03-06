import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export const provider = window.ethereum
  ? new ethers.providers.Web3Provider(window.ethereum)
  : null

export const useConnectWallet = () => {
  const [signer, setSigner] = useState(provider?.getSigner())
  const [address, setAddress] = useState(null)

  const connectWallet = async () => {
    await provider.send('eth_requestAccounts', [])
    window.location.reload()
  }

  useEffect(() => {
    if (signer) {
      try {
        signer.getAddress().then((newAddress) => setAddress(newAddress))
      } catch (error) {
        console.error({ error })
      }
    }
  }, [signer])

  useEffect(() => {
    if (window.ethereum) {
      const handleChainChange = () => window.location.reload()
      window.ethereum.on('chainChanged', handleChainChange)
      return () =>
        window.ethereum.removeListener('chainChanged', handleChainChange)
    }
  }, [])

  return [signer, connectWallet, address]
}
