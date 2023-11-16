import React from 'react';
import bath from '../../assets/voniaMerged.png';
import '../../styles/PrevenInfoModalPhoto.css';

export const Bath: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={bath} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};