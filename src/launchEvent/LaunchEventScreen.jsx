import { createContext, useCallback, useEffect, useState } from 'react'
import { selectedChain } from '../constants'
import { launchContractAbi } from './abis/defiRoundAbi'
import { Footer } from './Footer'
import { LaunchScreenBody } from './LaunchScreenBody'
import { LaunchScreenHeader } from './LaunchScreenHeader'
import { provider } from './useConnectWallet'
import { useEventListener } from './useEventListener'
import { useContract } from './utils'
export const StageContext = createContext(1)

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
      {[0, 1].includes(stage) ? <LaunchEventScreen /> : null}
    </StageContext.Provider>
  )
}

const RoutingButton = ({ children, selected }) => (
  <button
    className={`w-48 py-3 font-medium text-lg rounded-full text-center ${
      selected ? 'bg-darkPrimary' : 'border-solid border-[0.5px] border-white'
    }`}
  >
    {children}
  </button>
)

export const LaunchEventScreen = () => (
  <ScreenPaddedContainer>
    <div className="fixed bottom-10 left-10 flex flex-col space-y-4">
      <RoutingButton selected>Launch Event</RoutingButton>
      <RoutingButton>Last Look</RoutingButton>
      <RoutingButton>Cycle Zero</RoutingButton>
    </div>
    <LaunchScreenHeader />
    <LaunchScreenBody className={'-mt-20'} />
    <Footer />
  </ScreenPaddedContainer>
)

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen max-w-screen-2xl h-screen bg-black flex flex-col items-center justify-between px-16 pt-10 pb-16">
    {props.children}
  </div>
)
