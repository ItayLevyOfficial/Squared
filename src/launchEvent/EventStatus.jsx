import { BodyHeaderText } from './AccountStatus'
import React, { useState, useEffect } from 'react'
import { formatBigUsd } from './Body'
import { selectedChain } from './chains'

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

export const EventStatus = ({ launchContract }) => {
  const [totalCommitments, setTotalCommitments] = useState(0)
  const [maxTotalCommitments, setMaxTotalCommitments] = useState(0)

  useEffect(() => {
    if (launchContract) {
      launchContract.getMaxTotalValue().then((maxTotalValue) => {
        setMaxTotalCommitments(formatBigUsd(maxTotalValue))
      })
    }
  }, [launchContract])

  useEffect(() => {
    if (launchContract) {
      launchContract.totalValue().then((response) => {
        setTotalCommitments(formatBigUsd(response))
      })
    }
  }, [launchContract])

  const sqrdPrice =
    totalCommitments < 6_000_000
      ? '2.00'
      : totalCommitments > 24_000_000
      ? '8.00'
      : (totalCommitments / selectedChain.launchTokensAmount).toFixed(2)
  
  const soldPercent = Math.round(totalCommitments / (maxTotalCommitments / 2)) > 10
  const minimumSoldDisplayed = 20
  const displayedPercent = soldPercent > minimumSoldDisplayed ? soldPercent : minimumSoldDisplayed

  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Event Status"
        firstRow={`Total commitments: $${totalCommitments}`}
        // secondRow={`Conversion rate: $${puffPrice.toFixed(2)}/PUFF`}
        secondRow={`Conversion rate: $${sqrdPrice}/SQRD`}
        marginBottomClass="mb-7"
      />
      <div className="flex space-x-10">
        <StatusBar percent={displayedPercent} text="Sold" backgroundColorClass="bg-dark" />
        <StatusBar
          percent={100 - displayedPercent}
          text="Remaining"
          backgroundColorClass="bg-primary"
        />
      </div>
    </div>
  )
}
