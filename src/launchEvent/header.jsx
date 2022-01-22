import {AddressButton} from "../Layouts/Header";

export const LaunchEventHeader = ({className = ''}) => {
    return <div className={`flex items-center w-full justify-between ${className}`}>
        <div className="flex">
            <div className="w-0.5 h-50 bg-primary"/>
            <div className="w-5"/>
            <div className="flex flex-col space-y-2 font-bold tracking-widest">
                <h1 className="text-white text-5xl">PUFF</h1>
                <div className="flex items-center">
                    <h2 className="text-primary text-xl font-light mr-1.5">DEGENESIS EVENT</h2>
                </div>
            </div>
        </div>
        <div className="flex items-center">
            <h2 className="text-primary text-lg tracking-wide font-light mr-10">4 DAYS 23 HOURS 59 MINUTES REMAIN</h2>
            <AddressButton/>
        </div>
    </div>
}
