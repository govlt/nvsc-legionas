import React from 'react';
import boreHole from '../../assets/grezinys.svg';
import '../../styles/PrevenInfoModalPhoto.css';

export const BoreHole: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={boreHole} alt="Icon Description" className="image"/>
      </div>
    </>
  );
};