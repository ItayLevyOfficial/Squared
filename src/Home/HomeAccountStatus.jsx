import { DepositButton } from '../launchEvent/AccountStatus'

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
        <InformationLine>Total Balance: $0</InformationLine>{' '}
        <InformationLine>Earned Rewards: 0</InformationLine>
        <InformationLine>Available Rewards: 0</InformationLine>
        <InformationLine>SQRD Price: $23.50</InformationLine>{' '}
      </div>
      <DepositButton
        className="mb-5 bg-darkPrimary mt-10"
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
    <circle cx="15" cy="15" r="15" fill="white" />
    <path
      d="M22.9375 9.71875L15.5 6L8.0625 9.71875V19.2812L15.5 23L22.9375 19.2812V9.71875Z"
      fill="#FBFCD4"
    />
    <path
      d="M15.5 13.4375L8.0625 9.71875V19.2812L15.5 23L22.9375 19.2812V9.71875L15.5 13.4375Z"
      fill="#FFDD03"
    />
    <path
      d="M15.5 13.4375V23L22.9375 19.2812V9.71875L15.5 13.4375Z"
      fill="#FBC403"
    />
  </svg>
)
