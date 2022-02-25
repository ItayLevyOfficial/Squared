import { PageWrapper } from '../layouts/PageWrapper'
import { InformationBox, InformationLine } from '../products/Information'
import { getListOfUserBalances } from '../products/useErc20Functions'

export const DashboardInformation = () => {
  const listOfUserBalances = getListOfUserBalances()

  return (
    <PageWrapper>
      <InformationBox title={'Your Balance'}>
        <InformationLine>{`ETH: ${listOfUserBalances[0]}`} </InformationLine>
        <InformationLine>{`USDC: ${listOfUserBalances[1]}`}</InformationLine>
        <InformationLine>{`SQRD: ${listOfUserBalances[2]}`}</InformationLine>
        <InformationLine>{`SQRD LP: ${listOfUserBalances[3]}`}</InformationLine>
      </InformationBox>
      <div className="w-[0.5px] h-full bg-white" />
      <InformationBox title={'Your Rewards'}>
        <InformationLine>{`Earned: 0.0`}</InformationLine>
        <InformationLine>{`Available: 0.0`}</InformationLine>
        <InformationLine />
        <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
          Claim SQRD
        </button>
      </InformationBox>
    </PageWrapper>
  )
}
