import React from 'react'
import { ModalLine } from './ModalLine'

export const ModalInfo = ({ isOnWithdraw, selectedTokenIndex }) => {
  return (
    <div className="text-white text-sm mt-6">
      {isOnWithdraw ? (
        <>
          <ModalLine
            title="Deposited"
            amount="0.00"
            selectedTokenIndex={selectedTokenIndex}
          />
          <br />
          <ModalLine
            title="Requested Withdrawal"
            amount="0.00"
            selectedTokenIndex={selectedTokenIndex}
          />
          <ModalLine
            title="Available for Withdrawal"
            amount="0.00"
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
            amount="0.00"
            selectedTokenIndex={selectedTokenIndex}
          />
          <br /> <br />
          <div className="w-full flex flex-col items-center text-xs">
            <span>Withdrawals from Puff pools are subject to a cooldown</span>

            <span>
              Requested withdrawals become available at the beginning of next
              Cycle
            </span>
            <span>( within 24h )</span>
          </div>
        </>
      )}
    </div>
  )
}
