import React from 'react';
import InfoHeader from '../components/InfoHeader.tsx';
import { useNavigate } from 'react-router-dom';

export const WaterTestingInfo: React.FC = () => {
  const navigate = useNavigate();
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