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
    const handleAccountChange = () => {
      window.location.reload()
    }

    if (window.ethereum) {
      try {
        window.ethereum.on('accountsChanged', handleAccountChange)
        return () =>
          window.ethereum.removeListener('accountsChanged', handleAccountChange)
      } catch (error) {
        console.error({ error })
      }
    }
  }, [address, signer])

  return [signer, connectWallet, address]
}
