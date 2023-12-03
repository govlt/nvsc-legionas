import React from 'react';

export const PreventionInfoHeatingPoint: React.FC= () => {
  return(
    <>
      BNO administratorius prižiūri šilumos sistemas
        ir kad karšto vandens temperatūra nebūtų žemesnė nei <span style={{color: 'red'}}>50°</span>!
    </>
  );
};

export const AdditionalInfoHeatingPoint: React.FC= () => {
  return(
    <>
    <p>
      BNO (bendrojo naudojimo objektų) administratorius
      pastato administratorius/bendrija/jungtinės veiklos sutarties dalyvis atsako už:
    </p>
    <p>
      ✓ Reikiamą temperatūrą butuose;
    </p>
    <p>
      ✓ Karšto vandens temperatūrą;
    </p>
    <p>
      ✓ Kokybišką pastato šildymo ir karšto vandens sistemų priežiūrą;
    </p>
    <p>
      ✓ Vidaus šildymo sistemų avarijų likvidavimą;
    </p>
    <p>
      ✓ Pastato šildymo ir karšto vandens sistemų paruošimą šildymo sezonui;
    </p>
    <p>
      ✓ Informuoja apie prevencines priemones.
    </p>
    </>
  );
};