import React from 'react';
import { connect } from 'react-redux';
import { mapValuesToProps } from '../../utils';
import { DOUGHNUT_LABELS } from '../../constants';
 
import MainChart from './main/MainChart';
import ChartSidebar from './sidebar/ChartSidebar';
import TickerItems from './footer/TickerItems';
 
const Charts = ({ itemData }) => {
  const {
    currentTradingDate,
    currentTicker,
    currentExchange,
    chartPrices,
    chartChanges,
    chartTradeTimes,
    // doughnutLabels,
    chartPercents,
    chartDividends,
    chartYields,
    previousChangePercent,
    previousDividend,
    previousYield,
    currentChangePercent,
    currentDividend,
    currentYield,
  } = mapValuesToProps(itemData);
 
  return (
    <section className="content">
      <MainChart
        ticker={currentTicker}
        exchange={currentExchange}
        currentTradingDate={currentTradingDate}
        labels={chartTradeTimes}
        datasets={[chartPrices, chartChanges]}
      />
 
      <ChartSidebar
        previousChangePercent={previousChangePercent}
        previousDividend={previousDividend}
        previousYield={previousYield}
        currentChangePercent={currentChangePercent}
        currentDividend={currentDividend}
        currentYield={currentYield}
        labels={DOUGHNUT_LABELS}
        datasets={[chartPercents, chartDividends, chartYields]}
      />
 
      <TickerItems itemData={itemData} />
    </section>
  );
};
 
const mapStateToProps = (state) => ({ itemData: state.stockTicker.data });
 
export default connect(
  mapStateToProps,
  null,
)(Charts);