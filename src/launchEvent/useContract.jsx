import { useEffect, useState } from 'react'

export const useContract = (signer, contractAddress, abi) => {
  const [contract, setContract] = useState()

  useEffect(() => {
    setContract(
      new ethers.Contract(
        selectedChain.launchContractAddress,
        launchContractAbi,
        signer
      )
    )
  }, [signer])
}
