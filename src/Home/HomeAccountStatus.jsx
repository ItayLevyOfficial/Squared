import { getListOfPoolBalances } from './useErc20Functions'

export const InformationLine = ({ children }) => {
  return (
    <div className="font-number text-lg mb-2 tracking-wider">{children}</div>
  )
}

export const AccountStatus = ({ className }) => {
  const listOfPoolBalances = getListOfPoolBalances()

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="w-full text-4xl font-medium tracking-wide mb-2">
        Your Account Status
      </div>

      <div className="w-full font-number text-lg mb-2 tracking-wider self-center">
        <InformationLine>{`Total Balance: ${listOfPoolBalances[0]} `}</InformationLine>{' '}
        <InformationLine>{`Earned Rewards: ${listOfPoolBalances[1]}`}</InformationLine>
        <InformationLine>{`Available Rewards: ${listOfPoolBalances[1]}`}</InformationLine>
        <button className="bg-darkPrimary text-white w-[200px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
          Claim SQRD
        </button>
      </div>
    </div>
  )
}
