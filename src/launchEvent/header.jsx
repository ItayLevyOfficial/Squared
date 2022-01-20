import {AddressButton} from "../Layouts/Header";

export const LaunchEventHeader = ({className = ''}) => {
    return <div className={`flex items-center w-full justify-between ${className}`}>
        <div className="flex">
            <div className="w-0.5 h-50 bg-primary"/>
            <div className="w-5"/>
            <div className="flex flex-col space-y-2 font-bold tracking-widest">
                <h1 className="text-white text-5xl">PUFF</h1>
                <div>
                    <h2 className="text-primary text-xl font-light">DEGENESIS EVENT</h2>
                    <InfoIcon className="hover:fill-lightDark fill-primary"/>
                </div>
            </div>
        </div>
        <div className="flex items-center">
            <h2 className="text-primary text-lg tracking-wide font-light mr-10">4 DAYS 23 HOURS 59 MINUTES REMAIN</h2>
            <AddressButton/>
        </div>
    </div>
}

const InfoIcon = (props) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-6h-2v-2h4v8zm-1-9.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
    </svg>
}