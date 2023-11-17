import React from 'react';
import InfoHeader from '../components/InfoHeader.tsx';

export const WaterTestingInfo: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <p className="importantHeader">Geriamojo vandens informacija</p>
        <hr/>
        <p className="importantTextHeader">
            Informacija
        </p>
        <h3 className="importantMainText">
            Vandenį gerti galima 👍
        </h3>
      </div>
    </>
  );
};