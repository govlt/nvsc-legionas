import React from 'react';

export const PreventionInfoBath: React.FC= () => {
  return(
    <div>
      <p className='modalText'>
        Atsukus čiaupą karštas, ne mažiau nei <span style={{color: 'red'}}>50°</span>, vanduo turi atbėgti per 1 minutę!
      </p>
    </div>
  );
};

export const AdditionalInfoBath: React.FC= () => {
  return(
    <>
    <p>
      Mano atsakomybė prižiūrėti karšto vandens įrenginių būklę, reguliariai dezinfekuoti.
    </p>
    </>
  );
};

