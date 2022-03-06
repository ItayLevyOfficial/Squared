export const InformationLine = ({ children }) => {
  return (
    <div className="font-number text-xl mb-2 tracking-wider">{children}</div>
  )
}

export const AccountStatus = ({ className }) => {
  return (
    <div className={`flex flex-col  ${className}`}>
      <div className="w-full text-4xl font-medium tracking-wide mb-10">
        Your Account Status
      </div>

      <div className="w-full font-number tracking-wider self-center space-y-4">
        <InformationLine>Total Balance: 0</InformationLine>{' '}
        <InformationLine>Earned Rewards: 0</InformationLine>
        <InformationLine>Available Rewards: 0</InformationLine>
        <InformationLine>SQRD Price: $23.50</InformationLine>{' '}
      </div>
      <button className="bg-darkPrimary text-white w-[200px] text-md p-2 text-md rounded-lg opacity-60 mt-6">
        Claim SQRD
      </button>
    </div>
  )
}
