import React, {useEffect} from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const RightsAndObligationsInfo: React.FC = () => {
  useEffect(() => {
    return () => {window.scrollTo(0, 0);};
  }, []);
  
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Mano teisės ir pareigos</h1>
        <hr/>
        
        <p className="importantMainText">
          1. Kreiptis į BNO administratorių, jei karšto
          vandens temperatūra čiaupe per žema (&lt;50°C).
        </p>
        <p className="importantMainText">
          2. Kreiptis į savivaldybę, kai pastato
          administratorius/bendrija/jungtinės veiklos
          sutarties dalyvis nevykdo įsipareigojimų.
        </p>
        <p className="importantMainText">
          3. Prižiūrėti karšto vandens įrenginius ir
          vandens temperatūrą vartojimo vietoje
          (nebūtų žemesnė nei 50°C).
        </p>
        <p className="importantMainText">
          4. Tinkamai prižiūrėti savo buto ar kitų
          patalpų karšto vandens tiekimo įrenginių
          būklę bei jų eksploatavimo saugumą,
          eksploatuoti juos taip, kad jie neblogintų
          karšto vandens bei cirkuliacijos kokybės.
        </p>
        <p className="importantSmallText">
          Daugiabučio namo buto ar kitų patalpų savininko - buitinio karšto vandens vartotojo prievolė nurodyta
          ŠTVT 235.1. p., prižiūrėtojo ŠTVT 138 p., karšto vandens tiekėjo ŠTVT 231 p. ir šilumos tiekėjo ŠTVT 129 p.,
          ŠTVT 130 p. prievolės ir atsakomybės.
        </p>
        <a className="importantSmallText" href="https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.384505/asr">
          ŠILUMOS TIEKIMO IR VARTOJIMO TAISYKLĖS
        </a>
        <p className="importantMainText">
          5. Prižiūrėti geriamojo vandens įrenginius, kai
          iš higienos normas atitinkančio geriamojo
          vandens ruošiamas karštas vanduo -
          reguliariai apžiūrėti nuosavą vandentiekio
          tinklą ir įrenginius bei ne rečiau kaip kartą per
          metus išplauti vamzdyną, pažymėdamas
          pastato techniniame pase.
        </p>
        <a className="importantSmallText" href="https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.216857/asr">
            Reikalavimas nurodytas STR 2.07.01:2003 „Vandentiekis ir nuotekų
            šalintuvas. Pastato inžinerinės sistemos. Lauko inžineriniai tinklai“ 168
            punkte, Galiojanti suvestinė redakcija (nuo 2023-07-25).
        </a>
        <p className="importantMainText">
          6. Sekti pastato administratoriaus/bendrijos/
          jungtinės veiklos sutarties nurodymus apie
          vykdomas prevencines priemones.
        </p>
        <p className="importantMainText">
          7. Kreiptis į VMVT dėl geriamo vandens kokybės.
        </p>
      </div>
    </>
  );
};