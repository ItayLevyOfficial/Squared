export const InformationLine = ({
  heading,
  children,
  classNameHeading,
  classNameChildren,
}) => {
  return (
    <div className="flex text-xl">
      <div className={`${classNameHeading}`}>{heading} </div>
      <div className={`${classNameChildren} ml-4`}>{children}</div>
    </div>
  )
}

export const InformationBox = ({ title, children }) => {
  return (
    <div className="w-full h-42 text-white rounded-xl flex flex-col items-center">
      <div className="flex flex-col items-start space-y-2">
        <div className="font-bold text-2xl mb-2">{title}</div>
        {children}
      </div>
    </div>
  )
}
export const Information = (props) => {
  return (
    <div className="flex -mt-20 w-10/12">
      <InformationBox title={'VALUE LOCKED'}>
        <InformationLine heading={'SQRD TVL :'} children={props.sqrdTVL} />
        <InformationLine heading={'ASSET TVL :'} children={props.assetTVL} />
        <InformationLine heading={'TVL :'} children={props.TVL} />
      </InformationBox>
      <div className="w-[0.5px] h-42 bg-white" />
      <InformationBox title={'CYCLE'}>
        <InformationLine heading={'THIS CYCLE :'} children={props.cycleCount} />
        <InformationLine
          heading={'NEXT CYCLE :'}
          children={props.timeToNewCycle}
        />
        <InformationLine heading={'SQRD PRICE :'} children={props.tokenPrice} />
      </InformationBox>
    </div>
  )
}
