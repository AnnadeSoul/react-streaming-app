import { isFirstGreater } from '../../utils';
 
const COMPARE_PRICES = 'COMPARE_PRICES';
const COMPARE_CHANGE_PERCENT = 'COMPARE_CHANGE_PERCENT';
const COMPARE_DIVIDENDS = 'COMPARE_DIVIDENDS';
const COMPARE_YIELDS = 'COMPARE_YIELDS';
 
export function comparePrices(payload) {
  return {
    type: COMPARE_PRICES,
    payload
  };
}
 
export function compareChangePercent(payload) {
  return {
    type: COMPARE_CHANGE_PERCENT,
    payload
  };
}
 
export function compareDividends(payload) {
  return {
    type: COMPARE_DIVIDENDS,
    payload
  };
}
 
export function compareYields(payload) {
  return {
    type: COMPARE_YIELDS,
    payload
  };
}
 
const initialState = {};
 
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COMPARE_PRICES:
      if (
          isFirstGreater(
            state.price.previousPrice,
            state.price.currentPrice
          )
        )  return { ...state, priceIncreased: true };
      return { ...state, priceIncreased: false };
    case COMPARE_CHANGE_PERCENT:
      if (
          isFirstGreater(
            state.changePercent.currentChangePercent,
            state.changePercent.previousChangePercent
          )
        ) return { ...state, percentChangeIncreased: true };
      return { ...state, percentChangeIncreased: false };
    case COMPARE_DIVIDENDS:
      if (
          isFirstGreater(
            state.dividend.currentDividend,
            state.dividend.previousDividend
          )
        ) return { ...state, dividendIncreased: true };
      return { ...state, dividendIncreased: false };
    case COMPARE_YIELDS:
      if (
          isFirstGreater(
            state.yield.currentYield,
            state.yield.previousYield
          )
        ) return { ...state, yieldIncreased: true };
      return { ...state, yieldIncreased: false };
    default:
      return state;
  };
}