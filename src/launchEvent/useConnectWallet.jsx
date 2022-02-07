import { useState } from 'react'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const useConnectWallet = () => {
  const [signer, setSigner] = useState(null)

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

    const provider = new window.ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    setSigner(provider.getSigner())
  }

  return [signer, connectWallet]
}
