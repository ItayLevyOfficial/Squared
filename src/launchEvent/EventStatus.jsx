import { BodyHeaderText } from './AccountStatus'
import React, { useState } from 'react'

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
  const puffPrice = 9

  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Event Status"
        firstRow={`Total commitments: $${totalCommitments}`}
        secondRow={`Conversion rate: $${puffPrice.toFixed(2)}/PUFF`}
        marginBottomClass="mb-7"
      />
      <div className="flex space-x-10">
        <StatusBar percent={64} text="Sold" backgroundColorClass="bg-dark" />
        <StatusBar
          percent={36}
          text="Remaining"
          backgroundColorClass="bg-primary"
        />
      </div>
    </div>
  )
}
