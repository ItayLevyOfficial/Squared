import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { selectedChain } from '../constants'
import { HomeScreen } from '../home/HomeScreen'
import { launchContractAbi } from './abis/defiRoundAbi'
import {
  LaunchEventScreen, StageContext
} from './LaunchEventScreen'
import { provider } from './useConnectWallet'
import { useEventListener } from './useEventListener'
import { useContract } from './utils'

export const LaunchScreenContext = () => {
  const [stage, setStage] = useState(0)
  const readLaunchContract = useContract(
    provider,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )
  const handleRatesPublished = useCallback(() => setStage(1), [])

  useEventListener({
    contract: readLaunchContract,
    handler: handleRatesPublished,
    eventName: 'RatesPublished',
  })

  useEffect(() => {
    if (readLaunchContract) {
      readLaunchContract?.currentStage().then((response) => setStage(response))
    }
  }, [readLaunchContract])
  return (
    <StageContext.Provider value={stage + 1}>
      {[0, 1].includes(stage) ? <LaunchEventScreen /> : <HomeScreen />}
    </StageContext.Provider>
  )
}
