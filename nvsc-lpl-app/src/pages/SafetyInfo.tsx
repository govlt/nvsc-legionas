import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SafetyInfo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="infoButton" onClick={() => navigate('/svarbu-zinoti')}>
                Svarbu Žinoti
      </button>
    </>
  );
};