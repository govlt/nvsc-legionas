import React from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const WaterTestingInfo: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Geriamojo vandens informacija</h1>
        <hr/>
        
        <h3 className="importantTextHeader">
            Teisė turėti geriamo vandens šaltinį.
        </h3>
        <p className="importantMainText">
            Jūs ją turite!
        </p>
      </div>
    </>
  );
};