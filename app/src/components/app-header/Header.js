import React from 'react';
import { getDarkMode } from '../../utils';
import { AppleSwitch } from '../common';

export const Header = ({ handleToggle }) => {
  const classNames = 'stock-ticker__header container';

  return (
    <header className={getDarkMode() ? classNames + ' dark' : classNames}>
      <h1>Stock Blotter</h1>
      <div className="stock-ticker__header--toggler">
        <span>{getDarkMode() ? 'light' : 'dark'}</span>
        <AppleSwitch checked={getDarkMode()} handleChange={handleToggle} />
      </div>
    </header>
  );
};