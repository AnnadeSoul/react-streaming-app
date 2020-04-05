import React from 'react';

export const AppleSwitch = ({ checked, handleChange }) => (
  <input
    type="checkbox"
    className="apple-switch"
    checked={checked}
    onChange={handleChange}
  />
);