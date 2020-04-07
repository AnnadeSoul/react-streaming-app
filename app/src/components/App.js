import React, { useEffect } from 'react';
import '../scss/app.scss';
import connectTicker from '../services';
import { connect } from 'react-redux';
import {
  fetchAAPLDataSucceeded,
  fetchAAPLDataFailed
} from '../redux/ducks/stockTicker';
import { useTheme } from '../hooks';
import { GlobalLoader, Error } from './common';
import Header from './app-header';
import Charts from './charts';
import Footer from './app-footer';

const App = ({
  stockTicker,
  fetchAAPLDataSucceeded,
  fetchAAPLDataFailed
}) => {
  const { loading, data, error } = stockTicker;
  const { handleThemeChange } = useTheme();
  
  useEffect(() => {
    connectTicker({
      stockSymbol: 'AAPL',
      onSuccess: fetchAAPLDataSucceeded,
      onError: fetchAAPLDataFailed
    });
  }, [fetchAAPLDataSucceeded, fetchAAPLDataFailed]);

  const renderCharts = (error, loading, data) => (
    (!loading && !error && data) && (
      <div className="container"><Charts /></div>
    )
  );

  const renderError = (error) => (
    error && <Error />
  );

  const renderLoading = (loading) => (
    loading && <GlobalLoader />
  );

  return (
    <div className="stock-ticker">
      <Header handleToggle={handleThemeChange} />
      {renderError(error)}
      {renderLoading(loading)}
      {renderCharts(error, loading, data)}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ stockTicker: state.stockTicker });

export default connect(
  mapStateToProps,
  {
    fetchAAPLDataSucceeded,
    fetchAAPLDataFailed,
  }
)(App);