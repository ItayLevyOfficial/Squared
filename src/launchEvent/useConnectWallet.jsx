import { useState } from 'react'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { selectedChain } from '../chains'
import { useEventListener } from './useEventListener';

export const provider = window.ethereum
  ? new ethers.providers.Web3Provider(window.ethereum)
  : null

export const useConnectWallet = () => {
  const [signer, setSigner] = useState(provider?.getSigner())
  const [address, setAddress] = useState(null)

  const connectWallet = async () => {
    try {
      await window.ethereum?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: selectedChain.chainId }],
      })
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum?.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: selectedChain.chainId,
                chainName: selectedChain.chainName,
                rpcUrls: selectedChain.rpcUrls,
              },
            ],
          })
          await window.ethereum?.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: selectedChain.chainId }],
          })
        } catch (addError) {
          console.error({ addError })
        }
      }
    }
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
