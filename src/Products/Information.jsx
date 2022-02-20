export const InformationBox = (props) => {
  return (
    <div className="w-full h-42 text-white rounded-xl flex flex-col items-center">
      <div className="flex flex-col items-start space-y-2">
        <div className="font-bold text-2xl mb-2">{props.title}</div>
        <div className="flex text-lg justify-start ">
          <div>{props.heading1} </div>
          <div className="ml-4">{props.content1}</div>
        </div>
        <div className="flex text-xl">
          <div>{props.heading2} </div>
          <div className="ml-4">{props.content2}</div>
        </div>
        <div className="flex text-xl">
          <div>{props.heading3} </div>
          <div className="ml-4">{props.content3}</div>
        </div>
        <div className="flex text-xl">
          <div>{props.heading4} </div>
          <div className="ml-4">{props.content4}</div>
        </div>
      </div>
    </div>
  )
}

export const Information = () => {
  return (
    <div className="flex -mt-20 w-10/12">
      <InformationBox
        title="VALUE LOCKED"
        heading1="SQRD TVL :"
        heading2="ASSET TVL :"
        heading3="TVL :"
        content1=" $23,300,000"
        content2=" $70,500,000"
        content3=" $93,800,000"
      />
      <div className="w-[0.5px] h-42 bg-white" />
      <InformationBox
        title="CYCLE"
        heading1="THIS CYCLE :"
        heading2="NEXT CYCLE :"
        heading3="SQRD PRICE :"
        content1=" CYCLE ZERO-0"
        content2=" 01D 12H 45M"
        content3=" $22.86"
      />
    </div>
  )
}
