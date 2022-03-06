import React, { createContext, useCallback, useEffect, useState } from 'react'
// import Web3 from 'web3'
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

export const LaunchEventScreen = () => {
  
  // const web3 = new Web3(Web3.givenProvider)
  // console.log({web3});

  return (
    <ScreenPaddedContainer>
      <div className="flex flex-col items-center justify-between w-full max-w-screen-2xl h-full">
        <LaunchScreenHeader />
        <LaunchScreenBody className={'-mt-20'} />
        <Footer />
      </div>
    </ScreenPaddedContainer>
  )
}

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-16 pt-10 pb-16">
    {props.children}
  </div>
)
