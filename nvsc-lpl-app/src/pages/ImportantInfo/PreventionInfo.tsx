import React, {useEffect} from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const PreventionInfo: React.FC = () => {
  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = "scroll";
    return () => {
      window.scrollTo(0, 0);
      document.body.style.overflow = old;
    };}, []);

  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Prevencinės priemonės</h1>
        <hr/>

        <h3 className="importantTextHeader">
          Neleisti vandeniui užsistovėti vandens sistemoje
        </h3>
        <p className="importantMainText">
          Jei vanduo nebuvo naudojamas
          ilgesnį laiką, leisti vandeniui
          nubėgti keletą minučių, kol bus
          pasiekta 50°C temperatūra.
        </p>
        <h3 className="importantTextHeader">
          Vykdyti stebėseną
        </h3>
        <p className="importantMainText">
          Stebėti sanitarinių prietaisų, vandens
          čiaupų, maišytuvų, žarnelių būklę.
        </p>
        <h3 className="importantTextHeader">
          Atlikti reguliarią dezinfekciją
        </h3>
        <p className="importantMainText">
          Valyti ir dezinfekuoti dušus, dušų galvutes, čiaupus.
        </p>
        <h3 className="importantTextHeader">
          Nuosavuose namuose:
        </h3>
        <p className="importantMainText">
          Dezinfekcija bent 1 x metuose.
        </p>
        <h3 className="importantTextHeader">
          Daugiabučiuose:
        </h3>
        <p className="importantMainText">
          Vadovautis pastato
          administratoriaus/bendrijos/jungtinės
          veiklos sutarties dalyvio teikiamomis
          rekomendacijomis apie prevencines
          priemones.
        </p>
      </div>
    </>
  );
};