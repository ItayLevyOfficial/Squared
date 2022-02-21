export const InformationLine = ({
  heading,
  children,
  classNameHeading,
  classNameChildren,
}) => {
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

export const Information = ({
  assetsBalance,
  sqrdBalance,
  totalValueLocked,
}) => {
  return (
    <div className="flex -mt-20 w-10/12">
      <InformationBox title={'Value Locked'}>
        <InformationLine>{`SQRD TVL : ${sqrdBalance.toFixed(
          1
        )}`}</InformationLine>
        <InformationLine>{`ASSETS TVL : ${assetsBalance.toFixed(
          1
        )}`}</InformationLine>
        <InformationLine>{`TVL : ${totalValueLocked.toFixed(
          1
        )}`}</InformationLine>
      </InformationBox>
      <div className="w-[0.5px] h-42 bg-white" />
      <InformationBox title={'Cycle'}>
        <InformationLine>{`THIS CYCLE : CYCLE ZERO-0`}</InformationLine>
        <InformationLine>{`NEXT CYCLE : 3 DAYS 9 HOURS`}</InformationLine>
        <InformationLine>{`SQRD PRICE : $0.00`}</InformationLine>
      </InformationBox>
    </div>
  )
}
