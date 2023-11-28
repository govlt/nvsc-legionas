import React from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const LegionellosisInfo: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <p className="importantHeader">Kas yra legioneliozė?</p>
        <hr/>
        <p className="importantTextHeader">
            Atsakymus rasite DUK
        </p>
        <h3 className="importantMainText">
            tikrai
        </h3>
      </div>
    </>
  );
};