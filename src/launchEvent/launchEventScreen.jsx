export const LaunchEventScreen = () => <ScreenPaddedContainer>
    <div className="flex w-full max-w-screen-2xl">
        <div className="flex flex-col space-y-5">
            <h1 className="text-white text-5xl font-bold tracking-wide">Puff</h1>
            <h2 className="">Degenesis Event</h2>
        </div>
    </div>
</ScreenPaddedContainer>

export const ScreenPaddedContainer = (props) => <div className="w-screen h-screen bg-black flex flex-col items-center px-40 py-10">
    {props.children}
</div>
