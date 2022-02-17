import BNBIcon from './icons/BNB.svg'
import BUSDIcon from './icons/busd.svg'
import React from 'react'
import { selectedChain } from './chains'

const DepositButton = ({ tokenName, iconSrc, className = '', onClick }) => (
  <button
    className={`w-80 py-3 font-medium text-lg rounded-xl flex ${className} hover:bg-opacity-95`}
    onClick={onClick}
  >
    <img src={iconSrc} alt="" className="ml-8 mr-4" />
    Deposit / Withdraw&nbsp;{tokenName}
  </button>
)

export const BodyHeaderText = ({
  title,
  firstRow,
  secondRow,
  marginBottomClass = 'mb-5',
}) => (
  <>
    <h1 className="text-4xl font-medium tracking-wide mb-5">{title}</h1>
    <h2 className="font-number text-lg mb-2 tracking-wider">{firstRow}</h2>
    <h2 className={`font-number text-lg tracking-wider ${marginBottomClass}`}>
      {secondRow}
    </h2>
  </>
)

export const AccountStatus = ({
  amountCommitted = 0,
  isNativeCommitted = false,
  handleNativeClick,
  handleStableClick,
}) => {
  const nativeTokenName = selectedChain.tokens[0].name
  const stableTokenName = selectedChain.tokens[1].name

  return (
    <div className="flex flex-col">
      <BodyHeaderText
        title="Your Account Status"
        firstRow={`${nativeTokenName} committed: $${
          isNativeCommitted ? amountCommitted : 0
        }`}
        secondRow={`${stableTokenName} committed: $${
          isNativeCommitted ? 0 : amountCommitted
        }`}
      />
      <DepositButton
        backgroundColorClass=""
        iconSrc={BNBIcon}
        tokenName={nativeTokenName}
        className="mb-5 bg-darkPrimary"
        onClick={handleNativeClick}
      />
      <DepositButton
        iconSrc={BUSDIcon}
        tokenName={stableTokenName}
        onClick={handleStableClick}
        className="bg-white text-black"
      />
    </div>
  )
}
