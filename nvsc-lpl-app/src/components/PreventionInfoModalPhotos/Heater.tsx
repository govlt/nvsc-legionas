import React from 'react';
import heater from '../../assets/vandens_sildytuvas.svg';

export const Heater: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={heater} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};