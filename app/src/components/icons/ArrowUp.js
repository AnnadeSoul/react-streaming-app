import React from 'react';
import { ICON_COLORS } from '../../constants';

export const ArrowUp = ({ variant }) => {
  return (
    <span className={variant}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={ICON_COLORS.GREEN}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-arrow-up"
        viewBox="0 0 24 24"
      >
        <path d="M12 19V5m-7 7l7-7 7 7"></path>
      </svg>
    </span>
  );
}