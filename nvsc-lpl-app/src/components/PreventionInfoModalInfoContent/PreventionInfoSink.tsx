import React from 'react';

export const PreventionInfoSink: React.FC= () => {
  return(
    <>
      Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>, vanduo turi atbėgti per 1 minutę!
    </>
  );
};

export const AdditionalInfoSink: React.FC= () => {
  return(
    <>
    <p>
      Mano atsakomybė prižiūrėti karšto vandens įrenginių būklę, reguliariai dezinfekuoti.
    </p>
    </>
  );
};