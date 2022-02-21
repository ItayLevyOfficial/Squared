import React from 'react'
import { BodyHeaderText } from '../launchEvent/AccountStatus'
import { numberWithCommas } from '../launchEvent/EventStatus'
import { useEventData } from '../launchEvent/useEventData'
import { StatusBar } from '../launchEvent/EventStatus'

export const LastLookStatus = () => {
  const [totalCommitments, maxTotalCommitments, sqrdPrice] = useEventData()
  const swapPercent = Math.round((totalCommitments / maxTotalCommitments) * 100)
  const actualSwapPercent = swapPercent > 100 ? 100 : swapPercent
  const farmingPercent = swapPercent > 100 ? swapPercent - 100 : 0
  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Event Summary"
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
