import { DepositButton } from '../launchEvent/AccountStatus'
import { useFetchTotalBalance } from '../Home/useErc20Functions'
import { selectedChain } from '../constants'
export const InformationLine = ({ children }) => {
  return (
    <div className="font-number text-xl mb-2 tracking-wider">{children}</div>
  )
}

export const AccountStatus = ({ className }) => {
  const balance = useFetchTotalBalance()

  return (
    <div className={`flex flex-col  ${className}`}>
      <div className="w-full text-4xl font-medium tracking-wide mb-10">
        Your Account Status
      </div>

      <div className="w-full font-number tracking-wider self-center space-y-4">
        <InformationLine>
          Total Balance: {balance} {selectedChain.tokens[0].name}
        </InformationLine>{' '}
        <InformationLine>Earned Rewards: 0</InformationLine>
        <InformationLine>Available Rewards: 0</InformationLine>
        <InformationLine>SQRD Price: $23.50</InformationLine>{' '}
      </div>
      <DepositButton
        className="mb-5 bg-white text-black mt-10"
        icon={sqrdIcon}
        event={'Claim'}
        tokenName={'SQRD Rewards'}
        onClick={null}
      />
    </div>
  )
}

const sqrdIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.125 6.5625L15 0L1.875 6.5625V23.4375L15 30L28.125 23.4375V6.5625Z"
      fill="#FBFCD4"
    />
    <path
      d="M15 13.125L1.875 6.5625V23.4375L15 30L28.125 23.4375V6.5625L15 13.125Z"
      fill="#FFDD03"
    />
    <path d="M15 13.125V30L28.125 23.4375V6.5625L15 13.125Z" fill="#FBC403" />
  </svg>
)
