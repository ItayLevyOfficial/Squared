import React from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { LaunchScreenHeader } from './LaunchScreenHeader'

export const LaunchEventScreen = () => (
  <ScreenPaddedContainer>
    <div className="flex flex-col items-center justify-between w-full max-w-screen-2xl h-full">
      <LaunchScreenHeader />
      <Body />
      <Footer />
    </div>
  </ScreenPaddedContainer>
)

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-16 pt-10 pb-16">
    {props.children}
  </div>
)
