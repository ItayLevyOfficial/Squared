import { MerkleTree } from 'merkletreejs'
import whitelistedUsersHashes from '../hashedWhitelistedUsers.json'
import { useConnectWallet } from '../useConnectWallet'

export const useWhitelistProof = () => {
  const [, , address] = useConnectWallet()
  
}
