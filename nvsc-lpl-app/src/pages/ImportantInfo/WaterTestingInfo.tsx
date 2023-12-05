import React from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const WaterTestingInfo: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Geriamojo vandens tyrimų programos</h1>
        <hr/>
        
        <a className="importantMainText" href = "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.216309/asr">
          Vykdomos pagal Lietuvos higienos normos HN 24:2023 Geriamojo vandens saugos ir kokybės reikalavimus
        </a>
      </div>
    </>
  );
};