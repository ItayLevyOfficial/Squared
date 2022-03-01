import { ethers } from 'ethers'
import { MerkleTree } from 'merkletreejs'
import { useEffect, useState } from 'react'
import { useConnectWallet } from '../useConnectWallet'
import { Buffer } from 'buffer'
import { whitelistedUsers } from './whitelistedUsers'
import bufferfrom from 'buffer-from'
// Need this line for merkle tree js to work, it uses the global Buffer.
globalThis.Buffer = Buffer

const hashAddress = (address) =>
  bufferfrom(
    ethers.utils.solidityKeccak256(['address'], [address]).slice(2),
    'hex'
  )

export const useWhitelistProof = () => {
  const [, , address] = useConnectWallet()
  const [proof, setProof] = useState([])

  useEffect(() => {
    if (address) {
      const tree = new MerkleTree(whitelistedUsers, hashAddress, {
        sort: true,
        hashLeaves: true
      })
      const newProof = tree.getProof(
        hashAddress('0x02d1E6F6C7EADCf752f4174b39ee2AC2d8FbF6eb')
      )
      console.log({ newProof })
      setProof(newProof)
    }
  }, [address])

  return proof
}
