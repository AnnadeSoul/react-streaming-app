import React from 'react';
import { ICON_COLORS } from '../../constants';

export const ArrowDownRight = ({ variant }) => {
  return (
    <span className={variant}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={ICON_COLORS.RED}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-arrow-down-right"
        viewBox="0 0 24 24"
      >
        <path d="M7 7l10 10m0-10v10H7"></path>
      </svg>
    </span>
  );
}