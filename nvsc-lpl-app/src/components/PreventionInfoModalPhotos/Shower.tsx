import React from 'react';
import shower from '../../assets/dusas_back.svg';

export const Shower: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={shower} alt="Dušas" className="modalImage"/>
      </div>
    </>
  );
};