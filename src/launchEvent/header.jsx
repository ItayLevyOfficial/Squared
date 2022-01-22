import {AddressButton} from "../Layouts/Header";
import MetamaskIcon from './metamask.svg'

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
        <div className="flex items-center">
            {/*<h2 className="text-primary text-lg tracking-wide font-light mr-10 font-number">4 DAYS 23 HOURS 59 MINUTES REMAIN</h2>*/}
            <img src={MetamaskIcon} className="mr-4" alt=""/>
            <AddressButton/>
        </div>
    </div>
}

const TimeLeft = ({text = "4 DAYS 23 HOURS 59 MINUTES REMAIN", className}) => <h2
    className={`text-primary text-lg tracking-wide font-light mr-10 font-number ${className}`}>{text}</h2>
