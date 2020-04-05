import io from 'socket.io-client';

export const connectTicker = ({ stockSymbol, onSuccess, onError }) => {
  const socket = io('http://localhost:4000');

  socket.on('connect', () => {
    socket.on(stockSymbol, (_data) => {
      onSuccess(JSON.parse(_data));
    });

    socket.emit('ticker', stockSymbol);
  });

  socket.on('disconnect', () => console.log('disconnected'));

  socket.on('connect_error', () => onError());
};