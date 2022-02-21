import React from 'react'
import { BodyHeaderText } from './AccountStatus'
import { useEventData } from './useEventData'

const StatusBar = ({ percent, text, backgroundColorClass, className }) => {
  const minEdgeValue = 4
  const maxEdgeValue = 100 - minEdgeValue

  return (
    <div className={`flex flex-col h-36 ${className}`}>
      <div className={`flex items-end flex-1`}>
        <div className="bg-white h-full rounded-t-lg w-5" />
        <div className="bg-white h-[0.5px] w-24" />
      </div>
      <div
        className={`flex`}
        style={{
          height: `${
            percent > minEdgeValue
              ? percent < maxEdgeValue
                ? percent
                : maxEdgeValue
              : minEdgeValue
          }%`,
        }}
      >
        <div
          className={`bg-dark ${backgroundColorClass} h-full rounded-b-lg w-5 flex-none`}
        />
        <span className="font-number font-normal py-2 px-3">
          {percent}% {text}
        </span>
      </div>
    </div>
  )
}

function numberWithCommas(x) {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const LaunchEventStatus = () => {
  const [totalCommitments, maxTotalCommitments, sqrdPrice] = useEventData()
  let soldPercent = Math.round(
    (totalCommitments / (maxTotalCommitments / 2)) * 100
  )
  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Event Status"
        firstRow={`Total commitments: $${numberWithCommas(totalCommitments)}`}
        secondRow={`Conversion rate: $${sqrdPrice}/SQRD`}
        marginBottomClass="mb-7"
      />
      <div className="flex space-x-10">
        <StatusBar
          percent={soldPercent}
          text="Sold"
          backgroundColorClass="bg-dark"
        />
        <StatusBar
          percent={100 - soldPercent}
          text="Remaining"
          backgroundColorClass="bg-primary"
        />
      </div>
    </div>
  )
}

export const LastLookStatus = () => {
  const [totalCommitments, maxTotalCommitments, sqrdPrice] = useEventData()
  const swapPercent = Math.round((totalCommitments / maxTotalCommitments) * 100)
  const actualSwapPercent = swapPercent > 100 ? 100 : swapPercent
  const farmingPercent = swapPercent > 100 ? swapPercent - 100 : 0
  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Launch Event Summary"
        firstRow={`Total commitments: $${numberWithCommas(totalCommitments)}`}
        secondRow={`Conversion rate: $${sqrdPrice}/SQRD`}
        marginBottomClass="mb-7"
      />
      <div className="flex space-x-10">
        <StatusBar
          percent={actualSwapPercent}
          text="Swap"
          backgroundColorClass="bg-dark"
        />
        <StatusBar
          percent={farmingPercent}
          text="Farming"
          backgroundColorClass="bg-primary"
        />
      </div>
    </div>
  )
}

