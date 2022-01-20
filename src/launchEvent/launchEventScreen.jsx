export const LaunchEventScreen = () => <ScreenPaddedContainer>
    <div className="flex flex-col w-full max-w-screen-2xl bg-red-500 h-1.5">

    </div>
</ScreenPaddedContainer>

export const ScreenPaddedContainer = ({children}) => <div className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {children()}
</div>
