import React, { useState, useEffect } from 'react';
import { getDarkMode, formatTime } from '../../../utils';
import { Loader } from '../../common';
import { Line } from 'react-chartjs-2';
 
const MainChart = ({
  currentTradingDate,
  ticker,
  exchange,
  labels,
  datasets,
}) => {
  const classes = 'content__chart-main card';
  const [chartPrices, chartChanges] = datasets;
  const [currentTime, setCurrentTime] = useState(new Date());
 
  const updateTime = () => setCurrentTime(new Date());
 
  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
 
    return () => clearInterval(interval);
  }, [currentTime]);
 
  const data = {
    labels: [...labels],
    datasets: [
      {
        label: 'Price',
        data: [...chartPrices],
        backgroundColor: [
          'rgba(255, 64, 128, 0.1)',
        ],
        borderColor: [
          'rgba(255, 64, 128, 1)',
        ],
        borderWidth: 3,
      },
      {
        label: 'Change',
        data: [...chartChanges],
        backgroundColor: [
          'rgba(170, 0, 255, 0.1)',
        ],
        borderColor: [
          'rgba(170, 0, 255, 1)',
        ],
        borderWidth: 3,
      },
    ]
  }
 
  const options = {
    maintainAspectRatio: false,
    tooltips: {
      titleMarginBottom: 16,
      xPadding: 16,
      callbacks: {
        label: (tooltipItems, data) => ' $ ' + tooltipItems.yLabel,
      }
    },
    gridLines: {
      display: false,
      zeroLineColor: 'rgb(255, 64, 129)',
    },
    legend: {
      position: 'bottom',
    },
    scales: {
      yAxes: [{
        ticks: {
          callback: (value) => `$${value}`,
          fontColor: getDarkMode() && '#FFF',
          beginAtZero: true,
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: getDarkMode() && '#FFF',
        },
      }],
    },
  };
 
  const renderLoader = (
    <div className="card__header--centered loader--centered">
      <Loader />
    </div>
  );
 
  const renderChart = (
    <Line
      responsive
      // height={50}
      data={data}
      options={options}
    />
  );
 
  return (
    <div className={getDarkMode() ? classes + ' dark' : classes}>
      <header className="card__header mb-15">
        <h1 className="h1">{ticker}</h1>
        <span>{`${currentTradingDate}, ${formatTime(currentTime)}`}</span>
        <div>{exchange}</div>
      </header>
      {(chartPrices.length < 5 || chartChanges.length < 5) ? renderLoader : renderChart}
    </div>
  );
};
 
export default MainChart;