import ModalLine from './ModalLine'

const ModalInfo = ({ isModalOnWidthdraw, selectedToken }) => {
  return (
    <div className="text-white text-sm mt-6">
      {isModalOnWidthdraw ? (
        <>
          <ModalLine
            title="Deposited"
            amount="0.00"
            selectedToken={selectedToken}
          />
          <br />
          <ModalLine
            title="Requested Withdrawl"
            amount="0.00"
            selectedToken={selectedToken}
          />
          <ModalLine
            title="Available for Withdrawl"
            amount="0.00"
            selectedToken={selectedToken}
          />
          <br /> <br />
          <div className="w-full flex flex-col items-center">
            <span className="text-xs">
              Subsequent withdrawal requests will overwrite existing requests
            </span>

            <span className="text-xs">
              Requested withdrawals will become available after 1 cycle
            </span>
          </div>
        </>
      ) : (
        <>
          <ModalLine
            title="Deposited"
            amount="0.00"
            selectedToken={selectedToken}
          />
          <br /> <br />
          <div className="w-full flex flex-col items-center">
            <span className="text-xs">
              Withdrawals from Tokemak pools are subjected to a cooldown
            </span>

            <span className="text-xs">
              Requested withdrawals become available at the beginning of next
              Cycle
            </span>
            <span className="text-xs">( within 24h )</span>
          </div>
        </>
      )}
    </div>
  )
}

export default ModalInfo
