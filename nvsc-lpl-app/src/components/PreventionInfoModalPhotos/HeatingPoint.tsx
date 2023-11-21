import React from 'react';
import heatingPoint from '../../assets/silumos_punktas.svg';

export const HeatingPoint: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={heatingPoint} alt="Šilumos punktas" className="modalImage"/>
      </div>
    </>
  );
};