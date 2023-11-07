import React from 'react';
import { useNavigate } from "react-router-dom";

export const LegionellosisInfo: React.FC = () => {
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
            <p className='importantHeader'>Kas yra legioneliozė?</p>
            <hr/>
            <p className='importantTextHeader'>
                Atsakymus rasite DUK
            </p>
            <h3 className='importantMainText'>
                tikrai
            </h3>
        </div>
        </>
    );
}