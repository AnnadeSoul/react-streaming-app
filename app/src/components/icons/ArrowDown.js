import React from 'react';
import { ICON_COLORS } from '../../constants';

export const ArrowDown = ({ variant }) => {
  return (
    <span className={variant}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={ICON_COLORS.RED}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-arrow-down"
        viewBox="0 0 24 24"
      >
        <path d="M12 5v14m7-7l-7 7-7-7"></path>
      </svg>
    </span>
  );
}