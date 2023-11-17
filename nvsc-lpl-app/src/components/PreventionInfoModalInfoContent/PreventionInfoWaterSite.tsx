import React from 'react';

export const PreventionInfoWaterSite: React.FC= () => {
  return(
    <div>
      <p>
        Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>, vanduo turi atbėgti per 1 minutę!
      </p>
    </div>
  );
};

export const AdditionalInfoWaterSite: React.FC= () => {
  return(
    <div>
      <h2 className='modalPreventionHeader'>
        Prevencija
      </h2>
      <h1 className='modalTopicHeader'>
        Neleisti vandeniui užsistovėti vandens sistemoje
      </h1>
      <p className='modalText'>
        Jei vanduo nebuvo naudojamas ilgesnį laiką,
        leisti vandeniui nubėgti keletą minučių,
        kol bus pasiekta 50 C temperatūra
      </p>
      
      <h1 className='modalTopicHeader'>
        Vykdyti stebėseną
      </h1>
      <p className='modalText'>
        Stebėti sanitarinių prietaisų, vandens čiaupų, maišytuvų, žarnelių būklę
      </p>

      <h1 className='modalTopicHeader'>
        Atlikti reguliarią dezinfekciją
      </h1>
      <p className='modalText'>
        Valyti ir dezinfekuoti dušus, dušų galvutes, čiaupus
      </p>
    </div>
  );
};