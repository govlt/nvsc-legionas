import React from 'react';

export const PreventionInfoSink: React.FC= () => {
  return(
    <div>
      <p>
        Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>, vanduo turi atbėgti per 1 minutę!
      </p>
    </div>
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