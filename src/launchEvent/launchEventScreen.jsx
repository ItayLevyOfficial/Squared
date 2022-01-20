import {AddressButton} from "../Layouts/Header";

export const LaunchEventScreen = () => {
    return <ScreenPaddedContainer>
        <div className="flex flex-col items-center w-full max-w-screen-xl">
            <LaunchEventHeader className="mb-20"/>
            <div className="w-[60ch] flex flex-col">
                <h1 className="text-white text-3xl font-medium tracking-wide mb-1.5">Commit Assets</h1>
                <p className="text-white font-light">
                    Commit FTM or MIM to swap for BAKD.
                    Final conversion rate is set at start of last look.
                </p>
            </div>
        </div>
    </ScreenPaddedContainer>
}

const LaunchEventHeader = ({className = ''}) => {
    return <div className={`flex items-center w-full justify-between ${className}`}>
        <div className="flex">
            <div className="w-0.5 h-50 bg-primary"/>
            <div className="w-5"/>
            <div className="flex flex-col space-y-2 font-bold tracking-widest">
                <h1 className="text-white text-5xl">PUFF</h1>
                <h2 className="text-primary text-xl font-light">DEGENESIS EVENT</h2>
            </div>
        </div>
        <div className="flex items-center">
            <h2 className="text-primary text-lg tracking-wide font-light mr-10">4 DAYS 23 HOURS 59 MINUTES REMAIN</h2>
            <AddressButton/>
        </div>
    </div>
}

export const ScreenPaddedContainer = (props) => <div
    className="w-screen h-screen bg-black flex flex-col items-center px-40 py-16">
    {props.children}
</div>
