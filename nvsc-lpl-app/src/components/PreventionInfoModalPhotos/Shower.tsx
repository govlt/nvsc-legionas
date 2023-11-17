import React from 'react';
import shower from '../../assets/dusas.svg';

export const Shower: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={shower} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};