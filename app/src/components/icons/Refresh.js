import React from 'react';

export const Refresh = ({ variant, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={"feather feather-refresh-cw " + variant}
      viewBox="0 0 24 24"
    >
      <path d="M23 4v6h-6M1 20v-6h6"></path>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>
    </svg>
  );
}