const getQuote = require('../utils');
const { FETCH_INTERVAL } = require('../utils/constants');
 
const tickerService = ({ socket, ticker }) => {
  console.log('track Ticker');
 
  // run the first time immediately
  getQuote({ socket, ticker });
 
  // every N seconds
  const timer = setInterval(
    () => getQuote({ socket, ticker }),
    FETCH_INTERVAL
  );
 
  socket.on('disconnect', () => {
    console.log('stop tracking...');
    clearInterval(timer);
  });
};
 
module.exports = tickerService;