import React from 'react';
import hotWaterProvider from '../../assets/centriniai_silumos_tinklai.svg';

export const HotWaterProvider: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={hotWaterProvider} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};