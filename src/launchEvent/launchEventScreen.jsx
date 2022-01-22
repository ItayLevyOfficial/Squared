import {LaunchEventHeader} from "./header";

export const LaunchEventScreen = () => {
    return <ScreenPaddedContainer>
        <div className="flex flex-col items-center w-full max-w-screen-xl">
            <LaunchEventHeader/>
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

export const ScreenPaddedContainer = (props) => <div
    className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {props.children}
</div>
