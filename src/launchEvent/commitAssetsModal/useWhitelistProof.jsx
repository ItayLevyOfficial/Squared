import { ethers } from 'ethers'
import { MerkleTree } from 'merkletreejs'
import { useEffect, useState } from 'react'
import { useConnectWallet } from '../useConnectWallet'
import { Buffer } from 'buffer'
import { whitelistedUsers } from './whitelistedUsers'

// Need this line for merkle tree js to work, it uses the global Buffer.
globalThis.Buffer = Buffer

const hashAddress = (address) =>
  Buffer.from(
    ethers.utils.solidityKeccak256(['address'], [address]).slice(2),
    'hex'
  )

export const useWhitelistProof = () => {
  const [, , address] = useConnectWallet()
  const [proof, setProof] = useState([])

  useEffect(() => {
    if (address) {
      console.log({address});
      const hashedAddresses = whitelistedUsers.map((userAddress) =>
        hashAddress(userAddress)
      )
      console.log({hashedAddresses});
      const tree = new MerkleTree(hashedAddresses, hashAddress, {
        sort: true,
      })
      console.log({tree});
      const newProof = tree.getProof(address)
      console.log({ newProof })
      setProof(newProof)
    }
  }, [address])

  return proof
}
