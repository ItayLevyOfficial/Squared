import React from 'react'
import { ModalLine } from './ModalLine'
import { useFetchUserBalance } from '../dashboard/useFetchUserBalance'

export const ModalDepositedLine = ({ selectedTokenName }) => {
  const [ethBalance, usdcBalance, sqrdBalance, sqrdLpBalance] =
    useFetchUserBalance()
  return (
    <ModalLine
      title="Deposited"
      amount={
        selectedTokenName === 'ETH'
          ? ethBalance
          : selectedTokenName === 'USDC'
          ? usdcBalance
          : selectedTokenName === 'SQRD'
          ? sqrdBalance
          : sqrdLpBalance
      }
      selectedTokenName={selectedTokenName}
    />
  )
}

export const ModalInfo = ({ isOnWithdraw, selectedTokenName }) => {
  return (
    <div className="text-white text-sm mt-6">
      {isOnWithdraw ? (
        <>
          <ModalDepositedLine selectedTokenName={selectedTokenName} />
          <br />
          <ModalLine
            title="Requested Withdrawal"
            amount="0.0"
            selectedTokenName={selectedTokenName}
          />
          <ModalLine
            title="Available for Withdrawal"
            amount="0.0"
            selectedTokenName={selectedTokenName}
          />
          <br /> <br />
          <div className="w-full flex flex-col items-center text-xs">
            <span>
              Subsequent withdrawal requests will overwrite existing requests
            </span>

            <span>
              Requested withdrawals will become available after 1 cycle
            </span>
          </div>
        </>
      ) : (
        <>
          <ModalDepositedLine selectedTokenName={selectedTokenName} />
          <br /> <br />
          <div className="w-full flex flex-col items-center text-xs">
            <span>
              Withdrawals from Squared pools are subject to a cooldown
            </span>

            <span>
              Requested withdrawals become available at the beginning of next
              Cycle
            </span>
          </div>
        </>
      )}
    </div>
  )
}
