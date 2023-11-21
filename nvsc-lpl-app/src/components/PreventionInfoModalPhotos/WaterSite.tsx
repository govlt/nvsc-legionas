import React from 'react';
import waterSite from '../../assets/vandenviete.svg';

export const WaterSite: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={waterSite} alt="Vandenvietė" className="modalImage"/>
      </div>
    </>
  );
};