import React, { useEffect, useState } from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from './abis/defiRoundAbi'
import { BodyHeaderText } from './AccountStatus'
import { formatBigUsd } from './Body'
import { provider } from './useConnectWallet'
import { useContract } from './utils'
import { useEventData } from './useEventData'

const StatusBar = ({ percent, text, backgroundColorClass, className }) => (
  <div className={`flex flex-col h-36 ${className}`}>
    <div className={`flex items-end flex-1`}>
      <div className="bg-white h-full rounded-t-lg w-5" />
      <div className="bg-white h-[0.5px] w-24" />
    </div>
    <div className={`flex`} style={{ height: `${percent}%` }}>
      <div
        className={`bg-dark ${backgroundColorClass} h-full rounded-b-lg w-5 flex-none`}
      />
      <span className="font-number font-normal py-2 px-3">
        {percent}% {text}
      </span>
    </div>
  </div>
)

function numberWithCommas(x) {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const EventStatus = () => {
  const [totalCommitments, maxTotalCommitments, sqrdPrice] = useEventData()

  const soldPercent =
    Math.round(totalCommitments / (maxTotalCommitments / 2)) > 10
  const minSoldDisplayed = 7
  const displayedPercent =
    soldPercent > minSoldDisplayed ? soldPercent : minSoldDisplayed
  const totalCommitmentsDisplayed = numberWithCommas(
    displayedPercent === minSoldDisplayed
      ? Math.round((minSoldDisplayed / 100) * (maxTotalCommitments / 2))
      : totalCommitments
  )

  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Event Status"
        firstRow={`Total commitments: $${totalCommitmentsDisplayed}`}
        secondRow={`Conversion rate: $${sqrdPrice}/SQRD`}
        marginBottomClass="mb-7"
      />
      <div className="flex space-x-10">
        <StatusBar
          percent={displayedPercent}
          text="Sold"
          backgroundColorClass="bg-dark"
        />
        <StatusBar
          percent={100 - displayedPercent}
          text="Remaining"
          backgroundColorClass="bg-primary"
        />
      </div>
    </div>
  )
}
