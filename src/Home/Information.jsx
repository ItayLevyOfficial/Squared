export const InformationLine = ({ children }) => {
  return (
    <div className="font-number text-lg mb-2 tracking-wider">{children}</div>
  )
}

export const InformationBox = ({ title, children }) => {
  return (
    <div className="w-full h-42 flex flex-col items-start space-y-2">
      <div className="text-4xl font-medium tracking-wide mb-2">{title}</div>
      {children}
    </div>
  )
}

export const InformationWrapper = ({ children }) => {
  return <div className="flex  ">{children}</div>
}
