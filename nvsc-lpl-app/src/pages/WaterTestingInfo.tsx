import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WaterTestingInfo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="infoButtonContainer">
        <button className="infoButton" onClick={() => navigate('/svarbu-zinoti')}>
            Svarbu Žinoti
        </button>
      </div>
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