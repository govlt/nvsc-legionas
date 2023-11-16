import React from 'react';
import waterSite from '../../assets/vandenviete.svg';
import '../../styles/PrevenInfoModalPhoto.css';

export const WaterSite: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={waterSite} alt="Icon Description" className="image"/>
      </div>
    </>
  );
};