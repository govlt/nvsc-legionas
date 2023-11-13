import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PreventionInfo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="infoButtonContainer">
        <button className="infoButton" onClick={() => navigate('/svarbu-zinoti')}>
            Svarbu Žinoti
        </button>
      </div>
      <div className="importantContainer">
        <p className="importantHeader">Prevencinės priemonės</p>
        <hr/>
        <p className="importantTextHeader">
            Neįkvėpti vandens
        </p>
        <h3 className="importantMainText">
            Atsargiai
        </h3>
            
        <p className="importantTextHeader">
            Dar kas nors?
        </p>
        <h3 className="importantMainText">
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. pradžios.
            Lorem Ipsum tapo standartiniu fiktyviu tekstu,
            kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo raides atspaudų prese
            ir tokiu būdu sukūrė raidžių egzempliorių.
          <br/><br/>
            Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. pradžios.
            Lorem Ipsum tapo standartiniu fiktyviu tekstu,
            kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo raides atspaudų prese
            ir tokiu būdu sukūrė raidžių egzempliorių.
        </h3>
      </div>
    </>
  );
};