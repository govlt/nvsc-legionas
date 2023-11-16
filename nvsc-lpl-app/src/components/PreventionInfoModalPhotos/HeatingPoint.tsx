import React from 'react';
import heatingPoint from '../../assets/silumos_punktas.svg';
import '../../styles/PrevenInfoModalPhoto.css';

export const HeatingPoint: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={heatingPoint} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};