const { MAX_SAFE_INTEGER, EXCHANGE } = require('./constants');
 
const getUTCDate = () => {
  const now = new Date();
 
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
};
 
const getRandomValueBetween = ({
  min,
  max,
  precision
}) => {
  let _min = min === undefined ? 0 : min;
  let _max = max === undefined ? MAX_SAFE_INTEGER : max;
  let _precision = precision === undefined ? 0 : precision;
 
  let random = Math.random() * (_max - _min) + _min;
 
  return random.toFixed(_precision);
};
 
const getQuote = ({ socket, ticker }) => {
  const quote = {
    ticker,
    exchange: EXCHANGE.NASDAQ,
    price: getRandomValueBetween({ min: 100, max: 300, precision: 2 }),
    change: getRandomValueBetween({ min: 0, max: 200, precision: 2 }),
    change_percent: getRandomValueBetween({ min: 0, max: 1, precision: 2 }),
    last_trade_time: getUTCDate(),
    dividend: getRandomValueBetween({ min: 0, max: 1, precision: 2 }),
    yield: getRandomValueBetween({ min: 0, max: 2, precision: 2 }),
  };
 
  socket.emit(ticker, JSON.stringify(quote, null, 4));
};
 
module.exports = getQuote;