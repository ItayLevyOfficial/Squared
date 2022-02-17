import { useState } from 'react'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { selectedChain } from './chains'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const provider = window.ethereum ? new ethers.providers.Web3Provider(window.ethereum) : null

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
          // Need this line because the browser need some time before launching the connect window again.
          await delay(1_000)
        } catch (addError) {
          console.error({ addError })
        }
      }
    }
    await provider.send('eth_requestAccounts', [])
    setSigner(provider.getSigner())
  }

  useEffect(() => {
    if (signer) {
      signer.getAddress().then((newAddress) => setAddress(newAddress))
    }
  }, [signer])

  useEffect(() => {
    if (window.ethereum) {
      const handleChainChange = () => window.location.reload()
      window.ethereum.on('chainChanged', handleChainChange)
      return () => window.ethereum.removeListener(handleChainChange)
    }
  }, [])

  return [signer, connectWallet, address]
}
