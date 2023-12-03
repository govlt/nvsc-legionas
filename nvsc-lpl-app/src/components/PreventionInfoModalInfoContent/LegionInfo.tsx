import LegionImage from '../../assets/legioneles_ikona.svg';
import { Link } from 'react-router-dom';

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

export const RightsAndObligationsLink = () => {
    return(
        <>
        <Link className='legionLinkContainer' tabIndex={0} to='/teises-atsakomybes'>
            <div className='legionLinkTextContainer'>
                <p>
                    Išsamiau
                </p>
                <h3 className="legionLink" >
                    „Mano teisės ir pareigos“
                </h3>
            </div>
            <div className='legionLinkArrowContainer'>
                <svg className='legionLinkArrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                </svg>
            </div>
        </Link>
        </>
    )
};

export const ContactsLink = () => {
    return(
        <>
        <Link className='legionLinkContainer' tabIndex={0} to='/kontaktai'>
            <div className='legionLinkTextContainer'>
                <p>
                    Išsamiau apie atsakomybes
                </p>
                <h3 className="legionLink" >
                    „Institucijų ir įmonių atsakomybės ir kontaktai“
                </h3>
            </div>
            <div className='legionLinkArrowContainer'>
                <svg className='legionLinkArrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                </svg>
            </div>
        </Link>
        </>
    )
};