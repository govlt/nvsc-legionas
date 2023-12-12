import React, {useEffect} from 'react';
import InfoHeader from '../../components/InfoHeader.tsx';

export const WaterTestingInfo: React.FC = () => {
  useEffect(() => {
    return () => {window.scrollTo(0, 0);};
  }, []);
  
  return (
    <>
      <InfoHeader/>
      
      <div className="importantContainer">
        <h1 className="importantHeader">Geriamojo vandens tyrimų programos</h1>
        <hr/>
        
        <p className='importantMainText'>
          Geriamojo vandens tiekėjai turi rengti ir vykdyti geriamojo
          vandens stebėsenos programas. Šios stebėsenos tikslas yra: 
          <br/><br/>
          •	tikrinti, ar visoje geriamojo vandens tiekimo grandinėje
            veiksmingai taikomos rizikos žmonių sveikatai kontrolės priemonės
            ir ar atitikties vietoje geriamasis vanduo yra saugus ir kokybiškas;
          <br/>
          •	surinkti informaciją apie geriamojo vandens saugą ir kokybę,
            siekiant įrodyti, jog laikomasi&nbsp;
          <a href = "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.216309/asr">
            Higienos normoje
          </a>
          &nbsp;nustatytų reikalavimų;
          <br/>
            •	nustatyti tinkamiausius rizikos žmonių sveikatai mažinimo būdus.
        </p>

        
            
        <p className="importantMainText">
            
        </p>
        
      </div>
    </>
  );
};