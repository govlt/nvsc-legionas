import React from 'react';

export const PreventionInfoHeater: React.FC= () => {
  return(
    <>
      Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>
      , vanduo turi atbėgti per 1 minutę!
    </>
  );
};

export const AdditionalInfoHeater: React.FC= () => {
  return(
    <div>
      <p>
        Mano atsakomybė prižiūrėti, kad vandens temperatūra vartojimo vietoje nebūtų žemesnė nei 50°C,
        bei prižiūrėti karšto vandens įrenginių būklę, reguliariai dezinfekuoti.
      </p>
    </div>
  );
};