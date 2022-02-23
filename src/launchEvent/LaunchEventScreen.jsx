import React, { createContext, useCallback, useState } from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from './abis/defiRoundAbi'
import { Footer } from './Footer'
import { LaunchScreenBody } from './LaunchScreenBody'
import { LaunchScreenHeader } from './LaunchScreenHeader'
import { provider } from './useConnectWallet'
import { useEventListener } from './useEventListener'
import { useContract } from './utils'

export const StageContext = createContext(1)

export const LaunchScreenContext = () => {
  const [stage, setStage] = useState()
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
