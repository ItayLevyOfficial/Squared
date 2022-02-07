import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export const useContract = ({ address, abi, signer }) => {
  const [contract, setContract] = useState()
  // const launchContractAddress = '0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C'

  useEffect(() => {
    if (!contract) {
      setContract(new ethers.Contract(address, abi, signer))
    }
  }, [contract])

  return contract
}
