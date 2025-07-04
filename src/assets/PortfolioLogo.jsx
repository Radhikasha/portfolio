import React from 'react';
import finalLogo from './loho-removebg-preview.png';

const PortfolioLogo = ({ size = 250 }) => (
  <img 
    src={finalLogo} 
    alt="Portfolio Logo" 
    style={{ 
      width: `${size}px`, 
      height: `${size}px`, 
      objectFit: 'contain', 
      borderRadius: '0%' 
    }} 
  />
);

export default PortfolioLogo;