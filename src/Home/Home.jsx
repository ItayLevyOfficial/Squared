import { PageWrapper } from '../layouts/PageWrapper'
import { InformationBox, InformationLine } from './Information'
import { getListOfPoolBalances } from './useErc20Functions'

export const Home = () => {
  const listOfPoolBalances = getListOfPoolBalances()

  return (
    <PageWrapper>
      <InformationBox title={'Value Locked'}>
        <InformationLine>{`ETH TVL: ${listOfPoolBalances[0]} `}</InformationLine>
        <InformationLine>{`USDC TVL: ${listOfPoolBalances[1]}`}</InformationLine>
        <InformationLine>{`SQRD TVL: ${listOfPoolBalances[2]} `}</InformationLine>
      </InformationBox>
      <div className="w-[0.5px] h-full bg-white" />
      <InformationBox title={'Cycle'}>
        <InformationLine>{`This Cycle: CYCLE ZERO-0`}</InformationLine>
        <InformationLine>{`Next Cycle: 3 DAYS 9 HOURS`}</InformationLine>
        <InformationLine>{`SQRD Price: $0.00`}</InformationLine>
      </InformationBox>
    </PageWrapper>
  )
}
