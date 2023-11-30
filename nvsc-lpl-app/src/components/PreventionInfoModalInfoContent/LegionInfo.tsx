import LegionImage from '../../assets/legioneles_ikona.svg';

export const LegionInfoHeatingPoint = () => {
  return(
    <>
    <div className="legionDangerContainer">
        <div className="legionDangerTopContainer">
            <div className="legionDangerHeaderAndImageContainer">
                <div className="legionDangerImageItemContainer">
                    <div className="legionDangerImageContainer">
                        <img src={LegionImage} className="legionDangerImage"></img>
                    </div>
                </div>
                <div className="legionDangerHeaderContainer">
                    <h2>
                        Legioneliozės pavojus!
                    </h2>
                    <h2>
                        Ką atlikti prevenciškai?
                    </h2>
                </div>
            </div>
            <div>
                <p>
                    BNO administratorius prižiūri šilumos sistemas
                    ir kad karšto vandens temperatūra čiaupe nebūtų žemesnė nei 50°C !
                </p>
            </div>
        </div>
    </div>
    </>
  )
};

export const LegionInfoHeater = () => {
    return(
        <>
        <div className="legionDangerContainer">
            <div className="legionDangerTopContainer">
                <div className="legionDangerHeaderAndImageContainer">
                    <div className="legionDangerImageItemContainer">
                        <div className="legionDangerImageContainer">
                            <img src={LegionImage} className="legionDangerImage"></img>
                        </div>
                    </div>
                    <div className="legionDangerHeaderContainer">
                        <h2>
                            Legioneliozės pavojus!
                        </h2>
                        <h2>
                            Ką atlikti prevenciškai?
                        </h2>
                    </div>
                </div>
                <div>
                    <h3>
                        Prižiūrėti vandens šildytuvus
                    </h3>
                    <p>
                        Dezinfekcija bent 1 kartą metuose.
                    </p>

                    <h3>
                        Palaikyti vandens šildytuvo minimalią temperatūrą
                    </h3>
                    <p>
                        O tokios prevencijos nereikia???
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export const LegionInfoInside = () => {
    return(
        <>
        <div className="legionDangerContainer">
            <div className="legionDangerTopContainer">
                <div className="legionDangerHeaderAndImageContainer">
                    <div className="legionDangerImageItemContainer">
                        <div className="legionDangerImageContainer">
                            <img src={LegionImage} className="legionDangerImage"></img>
                        </div>
                    </div>
                    <div className="legionDangerHeaderContainer">
                        <h2>
                            Legioneliozės pavojus!
                        </h2>
                        <h2>
                            Ką atlikti prevenciškai?
                        </h2>
                    </div>
                </div>
                <div>
                    <h3>
                        1. Neleisti vandeniui užsistovėti vandens sistemoje
                    </h3>
                    <p>
                        Jei vanduo buvo nenaudojamas ilgesnį laiką, leisti vandeniui nubėgti keletą minučių,
                        kol bus pasiekta 50°C temperatūra.
                    </p>

                    <h3>
                        2. Vykdyti stebėseną
                    </h3>
                    <p>
                        Stebėti sanitarinių prietaisų, vandens čiaupų, maišytuvų, žarnelių būklę.
                    </p>

                    <h3>
                        3. Atlikti reguliarią dezinfekciją
                    </h3>
                    <p>
                        Valyti ir dezinfekuoti dušus, dušų galvutes, čiaupus.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export const LegionInfoNothing = () => {
    return(
        <>
        </>
    )
};