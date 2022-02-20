export const InformationLine = (props) => {
  return (
    <div className="flex text-xl">
      <div className={`${props.classNameHeading}`}>{props.heading} </div>
      <div className={`${props.classNameContent} ml-4`}>{props.content}</div>
    </div>
  )
}

export const InformationBox = (props) => {
  return (
    <div className="w-full h-42 text-white rounded-xl flex flex-col items-center">
      <div className="flex flex-col items-start space-y-2">
        <div className="font-bold text-2xl mb-2">{props.title}</div>
        {props.children}
      </div>
    </div>
  )
}
export const Information = (props) => {
  return (
    <div className="flex -mt-20 w-10/12">
      <InformationBox title={'VALUE LOCKED'}>
        <InformationLine heading={'SQRD TVL :'} content={props.sqrdTVL} />
        <InformationLine heading={'ASSET TVL :'} content={props.assetTVL} />
        <InformationLine heading={'TVL :'} content={props.TVL} />
      </InformationBox>
      <div className="w-[0.5px] h-42 bg-white" />
      <InformationBox title={'CYCLE'}>
        <InformationLine heading={'THIS CYCLE :'} content={props.cycleCount} />
        <InformationLine
          heading={'NEXT CYCLE :'}
          content={props.timeToNewCycle}
        />
        <InformationLine heading={'SQRD PRICE :'} content={props.tokenPrice} />
      </InformationBox>
    </div>
  )
}
