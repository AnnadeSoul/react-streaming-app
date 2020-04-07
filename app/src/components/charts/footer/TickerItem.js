import React, { useEffect, useState } from 'react';
import * as Icons from '../../icons';
import { CURRENCIES } from '../../../constants';
import { getDarkMode, formatDate, formatTime } from '../../../utils';

const TickerItem = ({
  last_trade_time,
  price,
  isIncreased
}) => {
  /** CURRENCIES hardcoded for now */
  const currentCurrency = CURRENCIES.USD;
  const [increased, setIncreased] = useState(isIncreased);

  // eslint-disable-next-line
  useEffect(() => setIncreased(isIncreased), []);

  const renderIcon = () => {
    const valueDown = <Icons.ArrowDownRight variant="icon" />;
    const valueUp = <Icons.ArrowUpRight variant="icon" />;

    return increased ? valueUp : valueDown;
  };

  const currencySign = (currentCurrency === 'USD') && (
    <Icons.DollarSign variant="icon" color={getDarkMode() ? '#fff' : '#212121'} />
  );

  const classNames = 'card card_ticker';

  return (
    <div className={getDarkMode() ? classNames + ' dark' : classNames}>
      <span className="date mb-5">
        {formatDate(last_trade_time)}
      </span>
      <span className="date mb-5">
        {`Last Trade at ${formatTime(last_trade_time)}`}
      </span>
      <div className="row_block">
        {currencySign}
        <span className="text">{price}</span>
        {renderIcon()}
      </div>
    </div>
  );
};

export default TickerItem;