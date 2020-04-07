import moment from 'moment';
 
/** Theme handling */
export const getDarkMode = () => JSON.parse(localStorage.getItem('DARK_MODE'));
export const setDarkMode = nextMode => localStorage.setItem('DARK_MODE', nextMode);
 
export const isValueIncreased = (values) => (
  (query) => (
    values.map(value => value[query])
      .slice(-2)
      .reduce((acc, val) => acc < val)
  )
);
 
/** Reverse search */
export const getByIndex = ({ data, indexFromEnd, value }) => (
  data[data.length - indexFromEnd]?.[value]
);
 
/** Date */
export const formatDate = date => moment(date).format('MMMM Do YYYY');
export const formatTime = date => moment(date).format('h:mm:ss a');
export const formatFooter = (new Date().getFullYear() === 2020)
  ? '2020'
  : `2020 - ${new Date().getFullYear()}`;
 
/** Maths */
export const reduceToFixed = (arr, precision) => (
  Number(
    arr.reduce((a, v) => Number(a) + Number(v)) / arr.length
  )
    .toFixed(precision)
);
 
export const isFirstGreater = (first, second) => first > second;
 
export const mapValuesToProps = data => {
  const previousChangePercent = getByIndex({
    data: data,
    indexFromEnd: 2,
    value: 'change_percent'
  });
  const previousDividend = getByIndex({
    data: data,
    indexFromEnd: 2,
    value: 'dividend'
  });
  const previousYield = getByIndex({
    data: data,
    indexFromEnd: 2,
    value: 'yield'
  });
  const currentChangePercent = getByIndex({
    data: data,
    indexFromEnd: 1,
    value: 'change_percent'
  });
  const currentDividend = getByIndex({
    data: data,
    indexFromEnd: 1,
    value: 'dividend'
  });
  const currentYield = getByIndex({
    data: data,
    indexFromEnd: 1,
    value: 'yield'
  });
  const currentTicker = getByIndex({
    data: data,
    indexFromEnd: 1,
    value: 'ticker'
  });
  const currentExchange = getByIndex({
    data: data,
    indexFromEnd: 1,
    value: 'exchange'
  });
  const currentTradingDate = formatDate(
    getByIndex({
      data: data,
      indexFromEnd: 1,
      value: 'last_trade_time'
    })
  );
  /** Line chart utils */
  const chartPrices = data.map(({ price }) => price);
  const chartChanges = data.map(({ change }) => change);
  const chartTradeTimes = data.map(({ last_trade_time }) => formatTime(last_trade_time));
  /** Doughnut chart utils */
  const chartPercents = data.map(({ change_percent }) => change_percent);
  const chartDividends = data.map(({ dividend }) => dividend);
  /** because yield is reserved word in JavaScript */
  const chartYields = data.map(({ yield: _yield }) => _yield);
 
  return {
    currentTradingDate,
    // Line
    currentTicker,
    currentExchange,
    chartPrices,
    chartChanges,
    chartTradeTimes,
    // Doughnut
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
  };
};