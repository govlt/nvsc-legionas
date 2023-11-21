import React from 'react';
import bath from '../../assets/vonia_back.svg';

export const Bath: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={bath} alt="Vonia" className="modalImage"/>
      </div>
    </>
  );
};