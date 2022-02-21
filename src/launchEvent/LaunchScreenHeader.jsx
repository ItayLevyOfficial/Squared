import React from 'react'
import { selectedChain } from '../chains'
import { AddressButton } from '../Layouts/Header'
import { PrimaryLink } from './commitAssetsModal/commitAssetsModal'
import Logo from './icons/logo.svg'
import MetamaskIcon from './icons/metamask.svg'
import { useConnectWallet } from './useConnectWallet'
import { convertMilliseconds } from './utils'
const timeLeftBarWidth = 'w-[580px]'

export const LaunchScreenHeader = ({
  phase = selectedChain.launchData.stage === 1 ? 'TAKE OFF EVENT' : 'LAST LOOK',
}) => {
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

const MiddleSection = () => {
  const paragraph =
    selectedChain.stage === 1 ? (
      <>
        {' '}
        Squared's take-off event has arrived. It's the first time users can buy
        SQRD to fill our liquidity reserve.&nbsp;
        <PrimaryLink>Learn more</PrimaryLink>
      </>
    ) : (
      <>
        {' '}
        Squared's last look period has arrived. Now users can see the final
        swap/farming ratio and withdraw their committed funds. &nbsp;
        <PrimaryLink>Learn more</PrimaryLink>
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

const AddressSection = ({ connectWallet, address }) => (
  <div className="flex items-center h-fit w-44 justify-end flex-shrink-0">
    <img src={MetamaskIcon} alt="" className="mr-4" />
    <AddressButton address={address} connectWallet={connectWallet} />
  </div>
)
export const weekInMillis = 604800000

const TimeLeft = ({ className = '' }) => {
  const timeLeftData =
    selectedChain.stage === 1
      ? {
          startTime: selectedChain.launchData.launchTime,
          length: weekInMillis,
        }
      : {
          startTime: selectedChain.launchData.lastLookStart,
          length: weekInMillis / 7,
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
