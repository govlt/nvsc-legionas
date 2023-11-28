import React from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const ContactsInfo: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <p className="importantHeader">
            Kontaktinė informacija
        </p>
        <hr/>
        <p className="importantTextHeader">
            Nelaimės atveju
        </p>
        <h3 className="importantMainText">
            skambinti 112
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