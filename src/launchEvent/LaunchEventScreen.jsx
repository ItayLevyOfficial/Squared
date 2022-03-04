import React, { useCallback } from 'react'
import { LaunchScreenBody } from './LaunchScreenBody'
import { Footer } from './Footer'
import { LaunchScreenHeader } from './LaunchScreenHeader'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { provider } from './useConnectWallet'
import { selectedChain } from '../chains/selectedChain'
import { launchContractAbi } from './abis/defiRoundAbi'
import { useContract } from './utils'
import { useEventListener } from './useEventListener'

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

export const LaunchEventScreen = () => (
  <ScreenPaddedContainer>
    <div className="flex flex-col items-center justify-between w-full max-w-screen-2xl h-full">
      <LaunchScreenHeader />
      <LaunchScreenBody className={'-mt-20'} />
      <Footer />
    </div>
  </ScreenPaddedContainer>
)

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-16 pt-10 pb-16">
    {props.children}
  </div>
)
