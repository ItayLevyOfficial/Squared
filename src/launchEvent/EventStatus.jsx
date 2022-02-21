import React, { useContext } from 'react'
import { BodyHeaderText } from './AccountStatus'
import { useEventData } from './useEventData'
import { selectedChain } from '../chains'
import { StageContext } from './LaunchEventScreen'

export const StatusBar = ({
  percent,
  text,
  backgroundColorClass,
  className,
}) => {
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

export function numberWithCommas(x) {
  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const LaunchEventStatus = () => {
  const [totalCommitments, maxTotalCommitments, sqrdPrice] = useEventData()
  let soldPercent = Math.round(
    (totalCommitments / (maxTotalCommitments / 2)) * 100
  )
  const farmingMoney = totalCommitments - maxTotalCommitments / 2
  const farmingPercent =
    farmingMoney > 0 ? Math.round((farmingMoney / totalCommitments) * 100) : 0
  const swapPercent = 100 - farmingPercent
  const stage = useContext(StageContext)
  console.table({stage})
  const secondStatusBarData =
    selectedChain.launchData.stage === 1
      ? {
          percent: 100 - soldPercent,
          text: 'Remaining',
        }
      : {
          percent: farmingPercent,
          text: 'Farming',
        }
  const firstStatusBarData =
    selectedChain.launchData.stage === 1
      ? {
          percent: soldPercent,
          text: 'Sold',
        }
      : {
          percent: swapPercent,
          text: 'Swap',
        }

  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title={
          selectedChain.launchData.stage === 1
            ? 'Event Status'
            : 'Event Summary'
        }
        firstRow={`Total commitments: $${numberWithCommas(totalCommitments)}`}
        secondRow={`Conversion rate: $${sqrdPrice}/SQRD`}
        marginBottomClass="mb-7"
      />
      <div className="flex space-x-10">
        <StatusBar
          percent={firstStatusBarData.percent}
          text={firstStatusBarData.text}
          backgroundColorClass="bg-dark"
        />
        <StatusBar
          percent={secondStatusBarData.percent}
          text={secondStatusBarData.text}
          backgroundColorClass="bg-primary"
        />
      </div>
    </div>
  )
}
