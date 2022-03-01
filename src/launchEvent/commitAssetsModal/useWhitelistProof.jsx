import { Buffer } from 'buffer'
import { ethers } from 'ethers'
import { useConnectWallet } from 'launchEvent/useConnectWallet'
import { MerkleTree } from 'merkletreejs'
import { useEffect, useState } from 'react'
import whitelistedUsersHashes from './hashedWhitelistedUsers.json'

export const useWhitelistProof = () => {
  const [, , address] = useConnectWallet()
  const [proof, setProof] = useState([])
  useEffect(() => {
    if (address) {
      const hashedUsersBuffer = whitelistedUsersHashes.map((item) =>
        Buffer.from(item.data)
      )
      const tree = new MerkleTree(hashedUsersBuffer, hashAddress, {
        sort: true,
      })
      setProof(tree.getProof(address))
    }
  }, [address])

  return proof
}

const hashAddress = (address) =>
  Buffer.from(
    ethers.utils.solidityKeccak256(['address'], [address]).slice(2),
    'hex'
  )
