import React from 'react';
import TickerItem from './TickerItem';
import { getDarkMode, isValueIncreased } from '../../../utils';
import { Loader } from '../../common';

const TickerItems = ({ itemData }) => {
  const classNames = 'card card_ticker';

  const renderNoData = (
    new Array(5).fill({}).map((_, idx) => (
      <div key={idx} className={getDarkMode() ? classNames + ' dark' : classNames}>
        <div className="card__header--centered">
          <Loader />
        </div>
      </div>
    ))
  );

  const isIncreased = isValueIncreased(itemData)('price');

  const renderData = () => {
    return (
      itemData.map(({ price, last_trade_time }) => (
        <TickerItem 
          key={last_trade_time}
          { 
           ...{
             last_trade_time,
             price,
             isIncreased
           }
          }
        />
      ))
    );
  };

  return (
    <footer className="content__chart-footer">
      {(itemData.length < 5) ? renderNoData : renderData()}
    </footer>
  );
};

export default TickerItems;