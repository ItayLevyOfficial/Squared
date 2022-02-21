export const InformationLine = ({ children, classNameChildren }) => {
  return (
    <div className="font-number text-lg mb-2 tracking-wider">
      <div className={`${classNameChildren}`}>{children}</div>
    </div>
  )
}

export const InformationBox = ({ title, children }) => {
  return (
    <div className="w-full h-42 text-white rounded-xl flex flex-col items-center">
      <div className="flex flex-col items-start space-y-2">
        <div className="text-4xl font-medium tracking-wide mb-5">{title}</div>
        {children}
      </div>
    </div>
  )
}

export const Information = ({ ethBalance, usdcBalance, sqrdBalance }) => {
  return (
    <div className="flex -mt-20 h-[200px] w-10/12">
      <InformationBox title={'Value Locked'}>
        <InformationLine>{`ETH TVL: ${ethBalance}`}</InformationLine>
        <InformationLine>{`USDC TVL: ${usdcBalance}`}</InformationLine>
        <InformationLine>{`SQRD TVL: ${sqrdBalance}`}</InformationLine>
      </InformationBox>
      <div className="w-[0.5px] h-full bg-white" />
      <InformationBox title={'Cycle'}>
        <InformationLine>{`This Cycle: CYCLE ZERO-0`}</InformationLine>
        <InformationLine>{`Next Cycle: 3 DAYS 9 HOURS`}</InformationLine>
        <InformationLine>{`SQRD Price: $0.00`}</InformationLine>
      </InformationBox>
    </div>
  )
}
