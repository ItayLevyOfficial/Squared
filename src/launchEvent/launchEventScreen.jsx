import {LaunchEventHeader} from "./header";
import {AccountStatus} from './accountStatus'

export const LaunchEventScreen = () => {
    return <ScreenPaddedContainer>
        <div className="flex flex-col items-center w-full max-w-screen-xl">
            <LaunchEventHeader className='mb-28'/>
            <AccountStatus/>
        </div>
    </ScreenPaddedContainer>
}

export const ScreenPaddedContainer = (props) => <div
    className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {props.children}
</div>
