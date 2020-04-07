import React from 'react';

export const DollarSign = ({ variant, color }) => {
  return (
    <span className={variant}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-dollar-sign"
        viewBox="0 0 24 24"
      >
        <path d="M12 1v22m5-18H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
      </svg>
    </span>
  );
}