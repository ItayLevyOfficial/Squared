import React from 'react'

export const logo = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M240 56L128 0L16 56V200L128 256L240 200V56Z" fill="#FFE244" />
    <path d="M128 112L16 56V200L128 256L240 200V56L128 112Z" fill="#FFD700" />
    <path d="M128 112V256L240 200V56L128 112Z" fill="#CFAF00" />
  </svg>
)
