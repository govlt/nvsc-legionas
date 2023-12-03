import React from 'react';

export const PreventionInfoShower: React.FC= () => {
  return(
    <>
      Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>, vanduo turi atbėgti per 1 minutę!
    </>
  );
};

export const AdditionalInfoShower: React.FC= () => {
  return(
    <>
    <p>
      Mano atsakomybė prižiūrėti karšto vandens įrenginių būklę, reguliariai dezinfekuoti.
    </p>
    </>
  );
};