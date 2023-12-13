import React from 'react';

export const PreventionInfoHotWaterProvider: React.FC= () => {
  return(
    <>
    </>
  );
};

export const AdditionalInfoHotWaterProvider: React.FC= () => {
  return(
    <>
      <h1 className="modalTopicHeader">
        Centrinių šilumos tinklų atsakomybės:
      </h1>
      <p>
        ✓ Karšto vandens tiekėjas atsako už karšto vandens temperatūrinių parametrų nukrypimus,
        nuo nustatytų galiojančiuose teisės aktuose ir karšto vandens pirkimo pardavimo sutartyje,
        bei karšto vandens kokybę&nbsp;
        <a href = "https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.384505/asr">
          (ŠTVŠ 232.1 p.)
        </a>;
      </p>
      
      <p>
        ✓ Užtikrina tinkamos temperatūros termofikato tiekimą;
      </p>
      <p>
        ✓ Matuoja termofikato temperatūrą šildymo punktuose;
      </p>
      <p>
        ✓ Tikrina karšto vandens parametrus ne rečiau kaip 2-3 kartus per savaitę žiemos metu;
      </p>
      <p>
        ✓ Tikrina karšto vandens parametrus ne rečiau kaip 1 kartą per savaitę vasaros metu;
      </p>
      <p>
        ✓ Sprendžia problemas.
      </p>
    </>
  );
};