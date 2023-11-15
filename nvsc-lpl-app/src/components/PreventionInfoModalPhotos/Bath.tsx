import React from 'react';
import bath from '../../assets/voniaMerged.png';
import '../../styles/Bath.css';

export const Bath: React.FC = () => {
  return (
    <>
      <div className="bathPlaceHolder">
        <img src={bath} alt="Icon Description" className="bathImage"/>
      </div>
    </>
  );
};