import React from 'react';
import { ICON_COLORS } from '../../constants';

export const Frown = ({ variant }) => {
  return (
    <span className={variant}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={ICON_COLORS.RED}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-frown"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 16s-1.5-2-4-2-4 2-4 2m1-7h.01M15 9h.01"></path>
      </svg>
    </span>
  );
}