import React from 'react'
import { ModalLine } from './ModalLine'
import { useFetchBalance } from './usePoolContracts'

export const ModalInfo = ({ isOnWithdraw, selectedTokenIndex }) => {
  const [
    assetsBalance,
    sqrdLpBalance,
    sqrdBalance,
    ethBalance,
    usdcBalance,
    totalValueLocked,
  ] = useFetchBalance()
  return (
    <div className="text-white text-sm mt-6">
      {isOnWithdraw ? (
        <>
          <ModalLine
            title="Deposited"
            amount={
              selectedTokenIndex === 'ETH'
                ? ethBalance
                : selectedTokenIndex === 'USDC'
                ? usdcBalance
                : selectedTokenIndex === 'SQRD'
                ? sqrdBalance
                : sqrdLpBalance
            }
            selectedTokenIndex={selectedTokenIndex}
          />
          <br />
          <ModalLine
            title="Requested Withdrawal"
            amount="0.0"
            selectedTokenIndex={selectedTokenIndex}
          />
          <ModalLine
            title="Available for Withdrawal"
            amount="0.0"
            selectedTokenIndex={selectedTokenIndex}
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
          <ModalLine
            title="Deposited"
            amount={
              selectedTokenIndex === 'ETH'
                ? ethBalance
                : selectedTokenIndex === 'USDC'
                ? usdcBalance
                : selectedTokenIndex === 'SQRD'
                ? sqrdBalance
                : sqrdLpBalance
            }
            selectedTokenIndex={selectedTokenIndex}
          />
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
