import React, { useEffect } from 'react';
import '../scss/app.scss';
import connectTicker from '../services';
import { connect } from 'react-redux';
import {
  fetchAAPLDataSucceeded,
  fetchAAPLDataFailed
} from '../redux/ducks/stockTicker';
import { GlobalLoader, Error } from './common';

const App = ({
  stockTicker,
  fetchAAPLDataSucceeded,
  fetchAAPLDataFailed
}) => {
  const { loading, data, error } = stockTicker;
  
  useEffect(() => {
    connectTicker({
      stockSymbol: 'AAPL',
      onSuccess: fetchAAPLDataSucceeded,
      onError: fetchAAPLDataFailed
    });
  }, [fetchAAPLDataSucceeded, fetchAAPLDataFailed]);

  if (error) return <Error />;
  if (loading) return <GlobalLoader />;
  if (!loading && data) return <p>Hi</p>;
};

const mapStateToProps = (state) => ({ stockTicker: state.stockTicker });

export default connect(
  mapStateToProps,
  {
    fetchAAPLDataSucceeded,
    fetchAAPLDataFailed,
  }
)(App);