import { useState } from 'react'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
import { useEffect, useMemo } from 'react'
import { ethers } from 'ethers'

export const provider = new ethers.providers.Web3Provider(window.ethereum)

export const useConnectWallet = () => {
  const [signer, setSigner] = useState(null)
  const [address, setAddress] = useState(null)

  const connectWallet = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x7a' }],
      })
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x7a',
                chainName: 'Fuse',
                rpcUrls: ['https://rpc.fuse.io/'],
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
    if (provider) {
      setSigner(provider.getSigner())
    }
  }, [provider])

  useEffect(() => {
    const handleChainChange = () => window.location.reload()

    window.ethereum.on('chainChanged', handleChainChange)
    return () => window.ethereum.removeListener(handleChainChange)
  }, [])

  return [signer, connectWallet, address]
}


//  Old Barry code, keeping it here for case we need to do extra work on chain change.
//     const { chainId } = await provider.getNetwork()
//     if (chainId === 122) {
//       setAddress(await signer.getAddress())
//     } else {
//       setAddress()
//     }
