import { ethers } from 'ethers'

export const ConnectBlockchain = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://bsc-dataseed.binance.org/'
  )
  const signer = provider.getSigner()

  console.log(signer)
}
