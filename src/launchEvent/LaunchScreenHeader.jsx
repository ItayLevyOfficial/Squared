import React, { useContext } from 'react'
import { launchEventArticle, selectedChain } from '../constants'
import { AddressSection } from '../Layouts/Header'
import { PrimaryLink } from './commitAssetsModal/commitAssetsModal'
import Logo from './icons/logo.svg'
import { StageContext } from './LaunchEventScreen'
import { useConnectWallet } from './useConnectWallet'
import { convertMilliseconds } from './utils'

export const timeLeftBarWidth = 'w-[580px]'

export const LaunchScreenHeader = () => {
  const launchStage = useContext(StageContext)
  const phase = launchStage === 1 ? 'LAUNCH EVENT' : 'LAST LOOK'
  const [, connectWallet, address] = useConnectWallet()

  return (
    <div className={`flex w-full justify-between`}>
      <BrandingSection>{phase}</BrandingSection>
      <MiddleSection />
      <AddressSection address={address} connectWallet={connectWallet} />
    </div>
  )
}

export const BrandingSection = ({ children }) => (
  <div className="flex flex-none h-fit">
    <img src={Logo} width={60} />
    <div className="w-5 flex-none" />
    <div className="w-[0.5px] h-50 bg-primary float-none" />
    <div className="w-5 float-none" />
    <div className="flex flex-col space-y-2 font-bold tracking-widest">
      <h1 className="text-white text-4xl font-basic font-semibold tracking-wide">
        SQUARED
      </h1>
      <div className="flex items-center">
        <h2 className="text-primary text-lg font-normal mr-1.5">{children}</h2>
      </div>
    </div>
  </div>
)

export const MiddleSection = () => {
  const launchStage = useContext(StageContext)
  const paragraph =
    launchStage === 1 ? (
      <>
        Squared's Launch Event has arrived. It's the first time users can buy
        SQRD to fill our liquidity reserve.&nbsp;
        <PrimaryLink onClick={() => window.open(launchEventArticle)}>
          Learn more
        </PrimaryLink>
      </>
    ) : launchStage === 2 ? (
      <>
        Squared's last look period has arrived. Now users can see the final
        swap/farming ratio and withdraw their committed funds. &nbsp;
        <PrimaryLink onClick={() => window.open(launchEventArticle)}>
          Learn more
        </PrimaryLink>
      </>
    ) : (
      <>
        We’re now entering the phase of Cycle Zero where Launch participants
        can claim their SQRD and migrate to the private farm.&nbsp;<PrimaryLink>Learn more</PrimaryLink>
      </>
    )
  return (
    <div className={`flex flex-col items-center w-full`}>
      <TimeLeft className="mb-6" />
      <p
        className={`${timeLeftBarWidth} text-center font-medium text-base tracking-wider leading-relaxed`}
      >
        {paragraph}
      </p>
    </div>
  )
}

export const weekInMillis = 604800000

const TimeLeft = ({ className = '' }) => {
  const launchStage = useContext(StageContext)
  const timeLeftData =
    launchStage === 1
      ? {
          startTime: selectedChain.launchData.launchTime,
          length: weekInMillis,
        }
      : launchStage === 2 ? {
          startTime: selectedChain.launchData.lastLookStart,
          length: weekInMillis / 7,
        } : {
          startTime: selectedChain.launchData.lastLookStart,
          length: weekInMillis,
        }
  const remainTimeMillis =
    timeLeftData.startTime + timeLeftData.length - new Date().getTime()
  const remainTimePercent =
    100 - Math.round((remainTimeMillis / timeLeftData.length) * 100)
  const formattedRemainTime = convertMilliseconds(remainTimeMillis)

  return (
    <div className={`${className} flex flex-col items-center`}>
      <h2
        className={`text-white text-lg tracking-wide font-light font-number mb-4`}
      >
        {`${formattedRemainTime.d > 0 ? `${formattedRemainTime.d} DAYS` : ''} ${
          formattedRemainTime.h
        } HOURS ${formattedRemainTime.m} MINUTES REMAIN`}
      </h2>
      <div className={`bg-lightPrimary h-4 ${timeLeftBarWidth} rounded-md`}>
        <div
          className={`bg-darkPrimary rounded-md h-full`}
          style={{ width: `${remainTimePercent}%` }}
        />
      </div>
    </div>
  )
}
