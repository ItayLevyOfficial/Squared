
import { createContext, useCallback, useState } from 'react'
import { selectedChain } from '../constants'
import { HomeScreen } from '../home/HomeScreen'
import { launchContractAbi } from './abis/defiRoundAbi'
import { LaunchEventScreen, RoutingButton, StageContext } from './LaunchEventScreen'
import { provider } from './useConnectWallet'
import { useContract } from './utils'

export const LaunchScreenContext = () => {
  const [stage, setStage] = useState(0)
  const readLaunchContract = useContract(
    provider,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )
  const handleRatesPublished = useCallback(() => setStage(1), [])

  // TODO: Uncomment those lines. Commented because the contract state is toggle-able in the harmony application.
  // useEventListener({
  //   contract: readLaunchContract,
  //   handler: handleRatesPublished,
  //   eventName: 'RatesPublished',
  // })

  // useEffect(() => {
  //   if (readLaunchContract) {
  //     readLaunchContract?.currentStage().then((response) => setStage(response))
  //   }
  // }, [readLaunchContract])
  return (
    <StageContext.Provider value={stage + 1}>
      <div className="fixed bottom-10 left-10 flex flex-col space-y-3">
        <RoutingButton currentStage={stage} buttonStage={0} setStage={setStage}>
          Launch Event
        </RoutingButton>
        <RoutingButton currentStage={stage} buttonStage={1} setStage={setStage}>
          Last Look
        </RoutingButton>
        <RoutingButton currentStage={stage} buttonStage={2} setStage={setStage}>
          Cycle Zero
        </RoutingButton>
      </div>
      {[0, 1].includes(stage) ? <LaunchEventScreen /> : <HomeScreen />}
    </StageContext.Provider>
  )
}
