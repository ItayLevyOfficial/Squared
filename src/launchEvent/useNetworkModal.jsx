import { useState, useEffect } from 'react'
import { selectedChain } from '../chains'

export const useNetworkModal = () => {
  const [wrongNetwork, setWrongNetwork] = useState(false)
  useEffect(() => {
    const handleNetworkChange = () => {
      if (
        parseInt(selectedChain.chainId, 16).toString() !==
        window.ethereum.networkVersion
      ) {
        setWrongNetwork(true)
      }
    }
    handleNetworkChange()

    return () => {
      setWrongNetwork(false)
    }
  }, [])

  return wrongNetwork
}
