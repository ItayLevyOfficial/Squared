import { useState } from 'react'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
import { useEffect, useMemo } from 'react'

export const useConnectWallet = () => {
  const [signer, setSigner] = useState(null)
  const provider = useMemo(() => new window.ethers.providers.Web3Provider(window.ethereum, 'any'), [])

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
          console.error({addError})
        }
      }
    }

    await provider.send('eth_requestAccounts', [])
    setSigner(provider.getSigner())
  }

  useEffect(() => {
    if (provider) {
        provider.getSigner().then(newSigner => setSigner(newSigner)) 
    }
  }, [provider])

  return [signer, connectWallet]
}
