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

function numberWithCommas(x) {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const EventStatus = ({ launchContract }) => {
  const [totalCommitments, setTotalCommitments] = useState(0)
  const [maxTotalCommitments, setMaxTotalCommitments] = useState(0)

  console.table({ totalCommitments, maxTotalCommitments })

  useEffect(() => {
    if (launchContract) {
      launchContract
        .getMaxTotalValue()
        .then((maxTotalValue) => {
          setMaxTotalCommitments(formatBigUsd(maxTotalValue))
        })
        .catch((error) => console.error({ error }))
    }
  }, [launchContract])

  useEffect(() => {
    if (launchContract) {
      launchContract
        .totalValue()
        .then((response) => {
          console.log('got there')
          setTotalCommitments(formatBigUsd(response))
        })
        .catch((error) => console.error({ error }))
    }
  }, [launchContract])

  const minSqrdPrice = '2.00'
  const maxSqrdPrice = '8.00'
  const minSqrdSold = 6000000
  const sqrdPrice =
    totalCommitments < minSqrdSold
      ? minSqrdPrice
      : totalCommitments > maxTotalCommitments / 2
      ? maxSqrdPrice
      : (totalCommitments / selectedChain.launchTokensAmount).toFixed(2)

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
