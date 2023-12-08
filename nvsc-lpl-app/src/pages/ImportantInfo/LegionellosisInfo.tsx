import React from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const LegionellosisInfo: React.FC = () => {
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Kas yra legioneliozė?</h1>
        <hr/>

        <p className="importantMainText">
          Legioneliozė - tai ūminė infekcinė liga, kurią sukelia bakterijos  legionelės (Legionella).
          <br/>
          Ligai būdingos dvi pagrindinės kliniškai ir epidemiologiškai susijusios ligos formos:
          <br/><br/>
          pirmoji - legionierių liga, kuri pasireiškia pneumonija (plaučių uždegimu)
          <br/>
          antroji - Pontiako karštligė, pasižyminti lengvesne ūminės respiracinės ligos eiga be pneumonijos.
        </p>
      </div>
    </>
  );
};