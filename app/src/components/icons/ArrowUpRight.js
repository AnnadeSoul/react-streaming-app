import React from 'react';
import { ICON_COLORS } from '../../constants';

export const ArrowUpRight = ({ variant }) => {
  return (
    <span className={variant}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={ICON_COLORS.GREEN}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-arrow-up-right"
        viewBox="0 0 24 24"
      >
        <path d="M7 17L17 7M7 7h10v10"></path>
      </svg>
    </span>
  );
}