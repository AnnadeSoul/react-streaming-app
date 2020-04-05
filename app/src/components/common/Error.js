import React, { useState, useCallback } from 'react';
import { Frown, Refresh } from '../icons';

export const Error = () => {
  const [retryClicked, setRetryClicked] = useState(false);

  const handleRetry = useCallback(() => {
    setRetryClicked(!retryClicked);
    window.location.reload();
  }, [retryClicked]);

  return (
    <div className="page-wrapper">
      <Frown variant="error-icon" />
      <h1 className="h1--big">
        Connection failed
      </h1>
      <button
        type="button"
        className="retry-btn"
        onClick={() => handleRetry()}
      >
        <span>refresh</span>
        <Refresh
          variant={retryClicked ? 'btn-icon retry-clicked' : 'btn-icon'}
          color="#FFF"
        />
      </button>
    </div>
  );
};