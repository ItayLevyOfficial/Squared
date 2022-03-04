import React from 'react'

export const StakingPool = ({ el, openModal, balance }) => {
  const { name } = el

  return (
    <div className="h-full text-white border-transparent rounded-xl flex flex-col items-center justify-between p-2 flex-shrink-0">
      <div className="flex justify-start items-center space-x-4 mb-4">
        <div className="text-2xl text-white font-medium">{name}</div>
        <div className="flex space-x-2">
          <PoolInformationWrapper>
            <PoolInformationLine>TVL:</PoolInformationLine>
            <PoolInformationLine>APR:</PoolInformationLine>
            <PoolInformationLine>Balance:</PoolInformationLine>
          </PoolInformationWrapper>
          <PoolInformationWrapper>
            <PoolInformationLine>{balance}</PoolInformationLine>
            <PoolInformationLine>{balance}</PoolInformationLine>
            <PoolInformationLine>{balance}</PoolInformationLine>
          </PoolInformationWrapper>
        </div>
      </div>
      <button
        onClick={() => openModal(name)}
        className="bg-darkPrimary hover:bg-opacity-95 text-white w-[200px] text-md p-2 text-md rounded-lg"
      >
        {name === 'SQRD' ? 'Stake and Vote' : 'Deposit/Withdraw'}
      </button>
    </div>
  )
}

export const PoolInformationLine = ({ children }) => {
  return <div className="text-sm">{children}</div>
}

export const PoolInformationWrapper = ({ children }) => {
  return <div className="flex flex-col items-start ">{children}</div>
}
