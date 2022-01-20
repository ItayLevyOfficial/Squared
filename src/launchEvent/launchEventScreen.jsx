export const LaunchEventScreen = () => <ScreenPaddedContainer>
    <div className="flex w-full max-w-screen-2xl">
        <h1 className="text-white text-5xl font-bold tracking-wide">Puff</h1>
    </div>
</ScreenPaddedContainer>

export const ScreenPaddedContainer = (props) => <div className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {props.children}
</div>
