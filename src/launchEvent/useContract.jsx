import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

export const useContract = (signer, contractAddress, abi) => {
  const [contract, setContract] = useState()

  useEffect(() => {
    if (signer) {
      setContract(new ethers.Contract(contractAddress, abi, signer))
    }
  }, [abi, contractAddress, signer])

  return contract
}
