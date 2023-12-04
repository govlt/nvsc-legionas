import React from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const FAQ: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Dažnai užduodami klausimai</h1>
        <hr/>
        <h3 className="importantTextHeader">
            Kaip atpažinti šią ligą, kokie jos požymiai?
        </h3>
        <p className="importantMainText">
            Legionierių ligai būdingas plaučių uždegimas,
            lydimas karščiavimo, kosulio, dusulio, raumenų ir galvos skausmo.
            Vidutiniškai 25-50 proc. pacientų gali viduriuoti, galimi sąmonės sutrikimai.
            Legionierių ligos vidutinis inkubacinis periodas
            (laikotarpis nuo užsikrėtimo iki simptomų atsiradimo) - 2-10 d.
            Retais atvejais iki 20 d.
        </p>
        <h3 className="importantTextHeader">
            Kaip galiu užsikrėsti legionelioze?
        </h3>
        <p className="importantMainText">
            Legionelioze dažniausiai užsikrečiama įkvepiant aerozolio
            (smulkių vandens lašelių) su Legionella bakterijomis patekus į plaučius
            arba galimas ir tiesioginis sukėlėjo patekimas į kvėpavimo takus
            (pvz., respiracinės terapijos metu, valgant - užspringus).
            Liga neplinta nuo žmogaus žmogui.
            Neužsikrečiama geriant vandenį ar jį vartojant maisto ruošimui.
        </p>
      </div>
    </>
  );
};