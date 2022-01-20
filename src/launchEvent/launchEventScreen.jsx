import {ConnectWalletButton} from "../Layouts/Header";

export const LaunchEventScreen = () => {
    return <ScreenPaddedContainer>
        <div className="flex flex-col items-center w-full max-w-screen-xl">
            <LaunchEventHeader/>
            <Spacer height="20"/>
            <div className="w-1/2">
                <h1 className="text-white text-2xl font-medium tracking-wide">Commit Assets</h1>
            </div>
        </div>
    </ScreenPaddedContainer>
}

const LaunchEventHeader = () => {
    const connectWallet = () => {
        // TODO: Implement connect wallet functionality.
    }

    return <div className="flex items-center w-full justify-between">
        <div className="flex">
            <div className="w-0.5 h-50 bg-primary"/>
            <div className="w-5"/>
            <div className="flex flex-col space-y-2 font-bold tracking-widest">
                <h1 className="text-white text-5xl font">PUFF</h1>
                <h2 className="text-primary text-xl tracking-widest font-light">DEGENESIS EVENT</h2>
            </div>
        </div>
        <ConnectWalletButton connectWallet={connectWallet}/>
    </div>
}

const Spacer = ({width = "0", height = "0"}) => <div className={`w-${width} h-${height} flex-none`}/>

export const ScreenPaddedContainer = (props) => <div
    className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {props.children}
</div>
