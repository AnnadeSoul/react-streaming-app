const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const tickerService = require('./services/tickerService');

const whitelist = [
  'http://localhost:4000',
  'http://localhost:3000'
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.options('*', cors(corsOptions));
app.get('/', (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(__dirname + '/index.html');
});

io.set('origins', '*:*');
io.on('connection', socket => {
  console.log('%c socket connected', 'color: cyan; font-weight: bold');

  socket.on('ticker', ticker => {
    tickerService({ socket, ticker });
  });

  socket.on('disconnect', () => {
    console.log('%c socket disconnected', 'color: yellow; font-weight: bold');
  })
});

// eslint-disable-next-line no-undef
const PORT = process.env.port || 4000;
http.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));