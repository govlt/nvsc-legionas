import React from 'react';
import boreHole from '../../assets/grezinys.svg';

export const BoreHole: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={boreHole} alt="Gręžinys" className="modalImage"/>
      </div>
    </>
  );
};