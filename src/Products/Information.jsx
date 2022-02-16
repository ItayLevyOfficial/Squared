import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useEffect, useState } from 'react'

const InformationBox = (props) => {
  return (
    <div className="w-80 bg-dark h-56  text-white rounded-xl flex flex-col items-center justify-between p-2">
      <div className="underline">{props.text}</div>
      <div className="self-center">{props.content}</div>
    </div>
  )
}

export const Information = (props) => {
  return (
    <div className="w-full h-56 rounded-xl flex items-center justify-evenly p-6 my-6 space-x-2">
      <InformationBox text="TOTAL BALANCE" content={props.balance} />
      <InformationBox text="TOTAL VALUE LOCKED" content={props.valueLocked} />
      <InformationBox text="CYCLE" content={props.lifecycle} />
    </div>
  )
}
