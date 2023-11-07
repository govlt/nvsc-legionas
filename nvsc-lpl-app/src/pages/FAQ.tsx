import React from 'react';
import { useNavigate } from "react-router-dom";

export const FAQ: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className='infoButtonContainer'>
            <button className='infoButton'
                onClick={() => navigate("/svarbu-zinoti")}>
                Svarbu Žinoti
            </button>
        </div>
        <div className='importantContainer'>
            <p className='importantHeader'>Dažnai užduodami klausimai</p>
            <hr/>
            <p className='importantTextHeader'>
                Kas yra legioneliozė?
            </p>
            <h3 className='importantMainText'>
                Legioneliozė – tai ūminė infekcinė liga, kurią sukelia bakterijos – legionelės (Legionella).
                Ligai būdingos dvi pagrindinės kliniškai ir epidemiologiškai susijusios ligos formos:
                pirmoji – legionierių liga, kuri pasireiškia pneumonija (plaučių uždegimu)
                ir antroji - Pontiako karštligė, pasižyminti lengvesne ūminės respiracinės ligos eiga be pneumonijos.
            </h3>
            <p className='importantTextHeader'>
                Kaip atpažinti šią ligą, kokie jos požymiai?
            </p>
            <h3 className='importantMainText'>
                Legionierių ligai būdingas plaučių uždegimas,
                lydimas karščiavimo, kosulio, dusulio, raumenų ir galvos skausmo.
                Vidutiniškai 25-50 proc. pacientų gali viduriuoti, galimi sąmonės sutrikimai.
                Legionierių ligos vidutinis inkubacinis periodas
                (laikotarpis nuo užsikrėtimo iki simptomų atsiradimo) – 2-10 d.
                Retais atvejais iki 20 d.
            </h3>
            <p className='importantTextHeader'>
                Kaip galiu užsikrėsti legionelioze?
            </p>
            <h3 className='importantMainText'>
                Legionelioze dažniausiai užsikrečiama įkvepiant aerozolio
                (smulkių vandens lašelių) su Legionella bakterijomis patekus į plaučius
                arba galimas ir tiesioginis sukėlėjo patekimas į kvėpavimo takus
                (pvz., respiracinės terapijos metu, valgant – užspringus).
                Liga neplinta nuo žmogaus žmogui.
                Neužsikrečiama geriant vandenį ar jį vartojant maisto ruošimui.
            </h3>
        </div>
        </>
    );
}