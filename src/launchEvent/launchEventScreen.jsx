import {HeaderButtons} from "../Layouts/Header";

export const LaunchEventScreen = () => <ScreenPaddedContainer>
    <div className="flex w-full max-w-screen-2xl justify-between">
        <div className="flex">
        <div className="w-0.5 h-50 bg-primary"/>
        <div className="w-5"/>
        <div className="flex flex-col space-y-2">
            <h1 className="text-white text-5xl font-bold tracking-wide">PUFF</h1>
            <h2 className="text-primary text-xl tracking-wide font-light">DEGENESIS EVENT</h2>
        </div>
        </div>
        <HeaderButtons/>
    </div>
</ScreenPaddedContainer>


export const ScreenPaddedContainer = (props) => <div className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {props.children}
</div>
