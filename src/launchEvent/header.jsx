import {AddressButton} from "../Layouts/Header";
import MetamaskIcon from './metamask.svg'
import {convertMilliseconds} from './convertMillis'

export const LaunchEventHeader = ({className = ''}) => {
    return <div className={`flex items-center w-full justify-between ${className}`}>
        <div className="flex">
            <div className="w-0.5 h-50 bg-primary"/>
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
}

const TimeLeft = ({remainTimeMillis = 276480000, className = ''}) => {
    const weekInMillis = 604800000
    const remainTimePercent = Math.round((remainTimeMillis / weekInMillis) * 100)

    const formattedRemainTime = convertMilliseconds(remainTimeMillis)

    return <div className={
        `${className} flex flex-col items-center mr-10`}>
        <h2
            className={`text-white text-lg tracking-wide font-light font-number`}>
            {`${formattedRemainTime.d} DAYS ${formattedRemainTime.h} HOURS ${formattedRemainTime.m} MINUTES REMAIN`}
        </h2>
        <div className="h-4"/>
        <div className="bg-dark h-4 w-[580px] rounded-md">
            <div className={`bg-primary w-[${remainTimePercent}%] rounded-l-md h-full`}/>
        </div>
    </div>
}
