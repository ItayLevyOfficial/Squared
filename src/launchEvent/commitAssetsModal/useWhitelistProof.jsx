import { ethers } from 'ethers'
import { MerkleTree } from 'merkletreejs'
import { useEffect, useState } from 'react'
import whitelistedUsersHashes from './hashedWhitelistedUsers.json'
import { useConnectWallet } from '../useConnectWallet'
import { Buffer } from 'buffer'

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
      console.table({address})
      const hashedUsersBuffer = whitelistedUsersHashes.map((item) =>
        Buffer.from(item.data)
      )
      const tree = new MerkleTree(hashedUsersBuffer, hashAddress, {
        sort: true,
      })
      const proof = tree.getProof(address)
      console.log({proof});
      setProof(proof)
    }
  }, [address])

  return proof
}


