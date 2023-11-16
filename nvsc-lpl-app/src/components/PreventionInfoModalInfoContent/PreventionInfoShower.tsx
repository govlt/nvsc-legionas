import React from 'react';

export const PreventionInfoShower: React.FC= () => {
  return(
    <div>
      <p>
        Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>, vanduo turi atbėgti per 1 minutę!
      </p>
    </div>
  );
};

export const AdditionalInfoShower: React.FC= () => {
  return(
    <div>
      <h2 className='modalPreventionHeader'>
        Prevencija
      </h2>
      <p className='modalText'>
        Some small text
      </p>
    </div>
  );
};