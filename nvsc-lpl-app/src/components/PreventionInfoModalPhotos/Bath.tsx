import React from 'react';
import bath from '../../assets/vonia.svg';

export const Bath: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={bath} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};