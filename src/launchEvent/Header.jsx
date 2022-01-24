import {AddressButton} from "../Layouts/Header";
import MetamaskIcon from './metamask.svg'
import {convertMilliseconds} from './convertMillis'

const timeLeftBarWidth = "w-[580px]"

export const Header = ({className = ''}) => {
  return <div className={`flex flex-col items-center w-full ${className}`}>
    <div className={`flex items-center w-full justify-between mb-6`}>
      <div className="flex">
        <div className="w-[0.5px] h-50 bg-primary"/>
        <div className="w-5"/>
        <div className="flex flex-col space-y-2 font-bold tracking-widest">
          <h1 className="text-white text-5xl font-basic font-semibold">PUFF</h1>
          <div className="flex items-center">
            <h2 className="text-primary text-xl font-normal mr-1.5">TAKE OFF EVENT</h2>
          </div>
        </div>
      </div>
      <TimeLeft/>
      <div className="flex items-center">
        <img src={MetamaskIcon} className="mr-4" alt=""/>
        <AddressButton/>
      </div>
    </div>
    <p className={`${timeLeftBarWidth} text-center font-medium text-base tracking-wider leading-relaxed`}>
      Puff's take-off event has arrived. It's the first time users can buy PUFF to fill our liquidity
      reserve.&nbsp;
      <a className="text-primary underline">Learn more</a>
    </p>
  </div>
}

const TimeLeft = ({remainTimeMillis = 276480000, className = ''}) => {
  const weekInMillis = 604800000
  const remainTimePercent = Math.round((remainTimeMillis / weekInMillis) * 12)
  const formattedRemainTime = convertMilliseconds(remainTimeMillis)
  const innerProgressLength = `w-${remainTimePercent}/12`

  return <div className={
    `${className} flex flex-col items-center mr-10`}>
    <h2
      className={`text-white text-lg tracking-wide font-light font-number mb-4`}>
      {`${formattedRemainTime.d} DAYS ${formattedRemainTime.h} HOURS ${formattedRemainTime.m} MINUTES REMAIN`}
    </h2>
    <div className={`bg-dark h-4 ${timeLeftBarWidth} rounded-md`}>
      <div className={`bg-primary ${innerProgressLength} rounded-l-md h-full`}/>
    </div>
  </div>
}
