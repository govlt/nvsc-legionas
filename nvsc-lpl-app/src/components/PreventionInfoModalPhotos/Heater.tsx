import React from 'react';
import heater from '../../assets/vandens_sildytuvas.svg';
import '../../styles/PrevenInfoModalPhoto.css';

export const Heater: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={heater} alt="Icon Description" className="image"/>
      </div>
    </>
  );
};