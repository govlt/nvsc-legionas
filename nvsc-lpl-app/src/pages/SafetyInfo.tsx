import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OptionsButton } from '../components/OptionsButton';
import '../styles/SafetyInfo.css';
import apartmanetsCC from '../assets/daugiabutis_centralizuotai_centralizuotai.png';
import apartmanetsCI from '../assets/daugiabutis_centralizuotai_individualiai.png';
import apartmanetsIC from '../assets/daugiabutis_individualiai_centralizuotai.png';
import apartmanetsII from '../assets/daugiabutis_individualiai_individualiai.png';
import houseCIG from '../assets/namas_centralizuotai_individualiai_gyvatukas.png';
import houseIIG from '../assets/namas_individualiai_individualiai_gyvatukas.png';



export const SafetyInfo: React.FC = () => {
  const navigate = useNavigate();

  const [residenceType, setResidenceType] = useState('Daugiabutyje');
  const [drinkingWaterSource, setDrinkingWaterSource] = useState('Centralizuotai');
  const [hotWaterSource, setHotWaterSource] = useState('Centralizuotai');

  return (
    <>
      <button className="infoButton" onClick={() => navigate('/svarbu-zinoti')}>
        Svarbu Žinoti
      </button>
      <div className="Index">
        <OptionsButton
          residenceType={residenceType}
          setResidenceType={setResidenceType}
          drinkingWaterSource={drinkingWaterSource}
          setDrinkingWaterSource={setDrinkingWaterSource}
          hotWaterSource={hotWaterSource}
          setHotWaterSource={setHotWaterSource}
        />
        
        { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Centralizuotai'
          && hotWaterSource === 'Centralizuotai' &&
          <div className="ImageContainer">
            <img className="Image" src={apartmanetsCC} alt="Daugiabutis"/>
          </div>
        }
        { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Centralizuotai'
          && hotWaterSource === 'Individualiai' &&
          <div className="ImageContainer">
            <img className="Image" src={apartmanetsCI} alt="Daugiabutis"/>
          </div>
        }
        { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Individualiai'
          && hotWaterSource === 'Centralizuotai' &&
          <div className="ImageContainer">
            <img className="Image" src={apartmanetsIC} alt="Daugiabutis"/>
          </div>
        }
        { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Individualiai'
          && hotWaterSource === 'Individualiai' &&
          <div className="ImageContainer">
            <img className="Image" src={apartmanetsII} alt="Daugiabutis"/>
          </div>
        }
        { residenceType === 'Individualiame name' && drinkingWaterSource === 'Centralizuotai'
          && hotWaterSource === 'Individualiai' &&
          <div className="ImageContainer">
            <img src={houseCIG} alt="Namas"/>
          </div>
        }
        { residenceType === 'Individualiame name' && drinkingWaterSource === 'Individualiai'
          && hotWaterSource === 'Individualiai' &&
          <div className="ImageContainer">
            <img src={houseIIG} alt="Namas"/>
          </div>
        }
      </div>
    </>
  );
};