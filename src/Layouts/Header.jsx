import React from 'react'
import MetamaskIcon from '../launchEvent/icons/metamask.svg'
import { BrandingSection } from '../launchEvent/LaunchScreenHeader'
import {
  timeLeftBarWidth,
  weekInMillis,
} from '../launchEvent/LaunchScreenHeader'
import { convertMilliseconds } from '../launchEvent/utils'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { selectedChain } from '../constants'

export const Header = () => {
  const [, connectWallet, address] = useConnectWallet()

  return (
    <nav
      className={`flex w-full justify-between
    `}
    >
      <BrandingSection>CYCLE ZERO</BrandingSection>
      <TimeLeft />
      <AddressSection connectWallet={connectWallet} address={address} />
    </nav>
  )
}

const AddressContainer = ({ children, className, onClick }) => (
  <button
    className={`text-white h-fit px-5 py-2 rounded-xl ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export const AddressButton = ({ address, connectWallet }) =>
  address ? (
    <AddressContainer className="border-solid border-[0.5px] border-white  font-number">
      {`${address.slice(0, 7)}...`}
    </AddressContainer>
  ) : (
    <AddressContainer
      onClick={connectWallet}
      className="bg-darkPrimary hover:bg-opacity-95"
    >
      Connect
    </AddressContainer>
  )

export const AddressSection = ({ connectWallet, address }) => {
  return (
    <div className="flex items-center h-fit w-44 justify-end flex-shrink-0">
      <img src={MetamaskIcon} alt="" className="mr-4" />
      <AddressButton connectWallet={connectWallet} address={address} />
    </div>
  )
}

const TimeLeft = () => {
  const timeLeftData = {
    startTime: selectedChain.launchData.launchTime,
    length: weekInMillis,
  }

  const remainTimeMillis =
    timeLeftData.startTime + timeLeftData.length - new Date().getTime()
  const remainTimePercent =
    100 - Math.round((remainTimeMillis / timeLeftData.length) * 100)
  const formattedRemainTime = convertMilliseconds(remainTimeMillis)

  return (
    <div className="mb-6 flex flex-col items-center self-center">
      <h2
        className={`text-white text-lg tracking-wide font-light font-number mb-4`}
      >
        {` ${
          formattedRemainTime.d > 0 ? `${formattedRemainTime.d} DAYS` : ''
        } ${formattedRemainTime.h} HOURS ${formattedRemainTime.m} MINUTES`}
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
