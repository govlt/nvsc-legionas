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
import { Bath } from '../components/PreventionInfoModalPhotos/Bath';
import { Sink } from '../components/PreventionInfoModalPhotos/Sink';
import { Shower } from '../components/PreventionInfoModalPhotos/Shower';
import { HeatingPoint } from '../components/PreventionInfoModalPhotos/HeatingPoint';
import { Heater } from '../components/PreventionInfoModalPhotos/Heater';
import { HotWaterProvider } from '../components/PreventionInfoModalPhotos/HotWaterProvider';
import { WaterSite } from '../components/PreventionInfoModalPhotos/WaterSite';
import { BoreHole } from '../components/PreventionInfoModalPhotos/BoreHole';
import { PreventionInfoModal } from '../components/PreventionInfoModal';
import { PreventionInfoBath } from '../components/PreventionInfoModalInfoContent/PreventionInfoBath';
import { PreventionInfoSink } from '../components/PreventionInfoModalInfoContent/PreventionInfoSink';
import { PreventionInfoShower } from '../components/PreventionInfoModalInfoContent/PreventionInfoShower';
import { PreventionInfoHeatingPoint } from '../components/PreventionInfoModalInfoContent/PreventionInfoHeatingPoint';
import { PreventionInfoHeater } from '../components/PreventionInfoModalInfoContent/PreventionInfoHeater';
import { PreventionInfoHotWaterProvider } from '../components/PreventionInfoModalInfoContent/PreventionInfoHotWaterProvider';
import { PreventionInfoWaterSite } from '../components/PreventionInfoModalInfoContent/PreventionInfoWaterSite';
import { PreventionInfoBoreHole } from '../components/PreventionInfoModalInfoContent/PreventionInfoBoreHole';


export const SafetyInfo: React.FC = () => {
  const navigate = useNavigate();

  const [residenceType, setResidenceType] = useState('Daugiabutyje');
  const [drinkingWaterSource, setDrinkingWaterSource] = useState('Centralizuotai');
  const [hotWaterSource, setHotWaterSource] = useState('Centralizuotai');
  const [showBathInfoModal, setShowBathInfoModal] = useState(false);
  const [showSinkInfoModal, setShowSinkInfoModal] = useState(false);
  const [showShowerInfoModal, setShowShowerInfoModal] = useState(false);
  const [showHeatingPointInfoModal, setShowHeatingPointInfoModal] = useState(false);
  const [showHeaterInfoModal, setShowHeaterInfoModal] = useState(false);
  const [showHotWaterProviderInfoModal, setShowHotWaterProviderInfoModal] = useState(false);
  const [showWaterSiteInfoModal, setShowWaterSiteInfoModal] = useState(false);
  const [showBoreHoleInfoModal, setShowBoreHoleInfoModal] = useState(false);

  const handleBathModalClick = () => {
    setShowBathInfoModal(true);
  };

  const handleCloseBathModal = () => {
    setShowBathInfoModal(false);
  };

  const handleSinkModalClick = () => {
    setShowSinkInfoModal(true);
  };

  const handleCloseSinkModal = () => {
    setShowSinkInfoModal(false);
  };

  const handleShowerModalClick = () => {
    setShowShowerInfoModal(true);
  };

  const handleCloseShowerModal = () => {
    setShowShowerInfoModal(false);
  };

  const handleHeatingPointModalClick = () => {
    setShowHeatingPointInfoModal(true);
  };

  const handleCloseHeatingPointModal = () => {
    setShowHeatingPointInfoModal(false);
  };

  const handleHeaterModalClick = () => {
    setShowHeaterInfoModal(true);
  };

  const handleCloseHeaterModal = () => {
    setShowHeaterInfoModal(false);
  };

  const handleHotWaterProviderModalClick = () => {
    setShowHotWaterProviderInfoModal(true);
  };

  const handleCloseHotWaterProviderModal = () => {
    setShowHotWaterProviderInfoModal(false);
  };

  const handleWaterSiteModalClick = () => {
    setShowWaterSiteInfoModal(true);
  };

  const handleCloseWaterSiteModal = () => {
    setShowWaterSiteInfoModal(false);
  };

  const handleBoreHoleModalClick = () => {
    setShowBoreHoleInfoModal(true);
  };

  const handleCloseBoreHoleModal = () => {
    setShowBoreHoleInfoModal(false);
  };

  return (
    <>
      <button className="infoButton" onClick={() => navigate('/svarbu-zinoti')}>
        Svarbu Žinoti
      </button>
      <div>
        <button onClick={handleBathModalClick}>VONIA MODAL</button>
        <button onClick={handleSinkModalClick}>KRIAUKLE MODAL</button>
        <button onClick={handleShowerModalClick}>DUSAS MODAL</button>
        <button onClick={handleHeatingPointModalClick}>SILUMOS PUNKTAS MODAL</button>
        <button onClick={handleHeaterModalClick}>VANDENS SILDYTUVAS MODAL</button>
        <button onClick={handleHotWaterProviderModalClick}>KARSTAS VANDEND TIEKEJEAS MODAL</button>
        <button onClick={handleWaterSiteModalClick}>VANDENVIETE MODAL</button>
        <button onClick={handleBoreHoleModalClick}>GREZINYS MODAL</button>
      </div>
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
      { showBathInfoModal &&
        <PreventionInfoModal
          image={<Bath />}
          header="Vonia"
          headerSectionContent={<PreventionInfoBath />}
          onClose={handleCloseBathModal}
        />
      }
      { showSinkInfoModal &&
        <PreventionInfoModal
          image={<Sink />}
          header="Kriauklė"
          headerSectionContent={<PreventionInfoSink />}
          onClose={handleCloseSinkModal}
        />
      }
      { showShowerInfoModal &&
        <PreventionInfoModal
          image={<Shower />}
          header="Dušas"
          headerSectionContent={<PreventionInfoShower />}
          onClose={handleCloseShowerModal}
        />
      }
      { showHeatingPointInfoModal &&
        <PreventionInfoModal
          image={<HeatingPoint />}
          header="Šilumos punktas"
          headerSectionContent={<PreventionInfoHeatingPoint />}
          onClose={handleCloseHeatingPointModal}
        />
      }
      { showHeaterInfoModal &&
        <PreventionInfoModal
          image={<Heater />}
          header="Vandens šildytuvas"
          headerSectionContent={<PreventionInfoHeater />}
          onClose={handleCloseHeaterModal}
        />
      }
      { showHotWaterProviderInfoModal &&
        <PreventionInfoModal
          image={<HotWaterProvider />}
          header="Karšto vandens tiekėjas"
          headerSectionContent={<PreventionInfoHotWaterProvider />}
          onClose={handleCloseHotWaterProviderModal}
        />
      }
      { showWaterSiteInfoModal &&
        <PreventionInfoModal
          image={<WaterSite />}
          header="Vandenvietė"
          headerSectionContent={<PreventionInfoWaterSite />}
          onClose={handleCloseWaterSiteModal}
        />
      }
      { showBoreHoleInfoModal &&
        <PreventionInfoModal
          image={<BoreHole />}
          header="Gręžinys"
          headerSectionContent={<PreventionInfoBoreHole />}
          onClose={handleCloseBoreHoleModal}
        />
      }
    </>
  );
};