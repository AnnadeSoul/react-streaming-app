import React from 'react';
import * as Icons from '../../icons';
import { getDarkMode, reduceToFixed, isFirstGreater } from '../../../utils';
import { Doughnut } from 'react-chartjs-2';
 
export const ChartSidebar = ({
  labels,
  datasets,
  previousChangePercent,
  previousDividend,
  previousYield,
  currentChangePercent,
  currentDividend,
  currentYield,
}) => {
  const classes = 'content__chart-sidebar card';
  const [chartPercents, chartDividends, chartYields] = datasets;
 
  const exportData = [
    reduceToFixed([...chartPercents], 2),
    reduceToFixed([...chartDividends], 2),
    reduceToFixed([...chartYields], 2)
  ];
 
  const data = {
    labels,
    datasets: [{
      data: exportData,
      backgroundColor: [
        'rgba(255, 235, 59, 1)',
        'rgba(29, 233, 182, 1)',
        'rgba(83, 109, 254, 1)',
      ],
      hoverBackgroundColor: [
        'rgba(255, 235, 59, 0.9)',
        'rgba(29, 233, 182, 0.9)',
        'rgba(83, 109, 254, 0.9)',
      ],
      borderColor: [
        'transparent',
      ],
      borderWidth: 1,
      weight: 5,
      borderAlign: 'inner',
    }],
  }
 
  const options = {
    legend: { display: false },
    animation: { animateRotate: true }
  };
 
  const [precentChange, dividends, yields] = exportData;
 
  const formatVariant = (prev, curr) => isFirstGreater(prev, curr) ? 'red' : 'green';
  const formatPercentChange = formatVariant(previousChangePercent, currentChangePercent);
  const formatDividends = formatVariant(previousDividend, currentDividend);
  const formatYield = formatVariant(previousYield, currentYield);
 
  const renderIcon = (prev, curr) => {
    const valueUp = <Icons.ArrowUp variant="icon" />;
    const valueDown = <Icons.ArrowDown variant="icon" />;
 
    return isFirstGreater(prev, curr) ? valueDown : valueUp;
  };
 
  return (
    <section className={getDarkMode() ? classes + ' dark' : classes}>
      <header className="card_header text-center mb-16">
        Operations
      </header>
      <Doughnut
        responsive
        width={100}
        height={100}
        data={data}
        options={options}
      />
      <div className="card__header border-bottom mt-16">
        <span className="text-14 mr-10 mb-5">Change Percent:</span>
        <span className="text-14 card__header">
          <span className={formatPercentChange}>
            {`% ${precentChange}`}
          </span>
          {renderIcon(previousChangePercent, currentChangePercent)}
        </span>
      </div>
      <div className="card__header border-bottom">
        <span className="text-14 mr-10 mb-5">Dividends:</span>
        <span className="text-14 card__header">
          <span className={formatDividends}>
            {`% ${dividends}`}
          </span>
          {renderIcon(previousDividend, currentDividend)}
        </span>
      </div>
      <div className="card__header border-bottom">
        <span className="text-14 mr-10 mb-5">Yield:</span>
        <span className="text-14 card__header">
          <span className={formatYield}>
            {`% ${yields}`}
          </span>
          {renderIcon(previousYield, currentYield)}
        </span>
      </div>
    </section>
  );
};
 
export default ChartSidebar;