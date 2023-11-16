import React, { useEffect, useState, useRef } from 'react';
import { OptionValuesButtons } from './OptionValuesButton';
import apartmentIcon from '../assets/daugiabutis_ikona.svg';
import blueTapIcon from '../assets/melynas_ciaupas_ikona.svg';
import redTapIcon from '../assets/raudonias_ciaupas_ikona.svg';
import { Bath } from '../components/PreventionInfoModalPhotos/Bath';
import { Sink } from '../components/PreventionInfoModalPhotos/Sink';
import { Shower } from '../components/PreventionInfoModalPhotos/Shower';
import { HeatingPoint } from '../components/PreventionInfoModalPhotos/HeatingPoint';
import { Heater } from '../components/PreventionInfoModalPhotos/Heater';
import { HotWaterProvider } from '../components/PreventionInfoModalPhotos/HotWaterProvider';
import { WaterSite } from '../components/PreventionInfoModalPhotos/WaterSite';
import { BoreHole } from '../components/PreventionInfoModalPhotos/BoreHole';
import { PreventionInfoModal } from './PreventionInfoModal';
import { PreventionInfoBath } from './PreventionInfoModalInfoContent/PreventionInfoBath';
import { PreventionInfoSink } from './PreventionInfoModalInfoContent/PreventionInfoSink';
import { PreventionInfoShower } from './PreventionInfoModalInfoContent/PreventionInfoShower';
import { PreventionInfoHeatingPoint } from './PreventionInfoModalInfoContent/PreventionInfoHeatingPoint';
import { PreventionInfoHeater } from './PreventionInfoModalInfoContent/PreventionInfoHeater';
import { PreventionInfoHotWaterProvider } from './PreventionInfoModalInfoContent/PreventionInfoHotWaterProvider';
import { PreventionInfoWaterSite } from './PreventionInfoModalInfoContent/PreventionInfoWaterSite';
import { PreventionInfoBoreHole } from './PreventionInfoModalInfoContent/PreventionInfoBoreHole';

interface OptionsButtonProps {
    residenceType: string;
    setResidenceType: React.Dispatch<React.SetStateAction<string>>;
    drinkingWaterSource: string;
    setDrinkingWaterSource: React.Dispatch<React.SetStateAction<string>>;
    hotWaterSource: string;
    setHotWaterSource: React.Dispatch<React.SetStateAction<string>>;
  }

export const OptionsButton: React.FC<OptionsButtonProps> = ({
  residenceType, 
  setResidenceType, 
  drinkingWaterSource, 
  setDrinkingWaterSource, 
  hotWaterSource,
  setHotWaterSource,
}) => {
  const [showOptionsResidence, setShowOptionsResidence] = useState(false);
  const [showOptionsDrinkingWater, setShowOptionsDrinkingWater] = useState(false);
  const [showOptionsHotWater, setShowOptionsHotWater] = useState(false);
  const [showBathInfoModal, setShowBathInfoModal] = useState(false);
  const [showSinkInfoModal, setShowSinkInfoModal] = useState(false);
  const [showShowerInfoModal, setShowShowerInfoModal] = useState(false);
  const [showHeatingPointInfoModal, setShowHeatingPointInfoModal] = useState(false);
  const [showHeaterInfoModal, setShowHeaterInfoModal] = useState(false);
  const [showHotWaterProviderInfoModal, setShowHotWaterProviderInfoModal] = useState(false);
  const [showWaterSiteInfoModal, setShowWaterSiteInfoModal] = useState(false);
  const [showBoreHoleInfoModal, setShowBoreHoleInfoModal] = useState(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (residenceType === 'Individualiame name' && hotWaterSource === 'Centralizuotai') {
      setHotWaterSource('Individualiai');
    }
  }, [residenceType, hotWaterSource, setHotWaterSource]);

  const handleOptionResidenceClick = () => {
    setShowOptionsResidence(true);
    setShowOptionsDrinkingWater(false);
    setShowOptionsHotWater(false);

  };

  const handleCloseOptionResidence = () => {
    setShowOptionsResidence(false);
  };

  const handleOptionDrinkingWaterClick = () => {
    setShowOptionsDrinkingWater(true);
    setShowOptionsResidence(false);
    setShowOptionsHotWater(false);
  };

  const handleCloseOptionDrinkingWater = () => {
    setShowOptionsDrinkingWater(false);
  };

  const handleOptionHotWaterClick = () => {
    setShowOptionsHotWater(true);
    setShowOptionsResidence(false);
    setShowOptionsDrinkingWater(false);
  };

  const handleCloseOptionHotWater = () => {
    setShowOptionsHotWater(false);
  };

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

 

  return(
    <>
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
      
      <div>
        { showOptionsResidence &&
        <OptionValuesButtons
          property={residenceType}
          optValue1="Daugiabutyje"
          optValue2="Individualiame name"
          setProperty={setResidenceType}
          onClose={handleCloseOptionResidence}
          optionsRef={optionsRef}
        />
        }
        { showOptionsDrinkingWater &&
        <OptionValuesButtons
          property={drinkingWaterSource}
          optValue1="Centralizuotai"
          optValue2="Individualiai"
          setProperty={setDrinkingWaterSource}
          onClose={handleCloseOptionDrinkingWater}
          optionsRef={optionsRef}
        />
        }
        { showOptionsHotWater &&
        <OptionValuesButtons
          property={hotWaterSource}
          optValue1="Centralizuotai"
          optValue2="Individualiai"
          setProperty={setHotWaterSource}
          disableOptValue1={residenceType === 'Individualiame name'}
          onClose={handleCloseOptionHotWater}
          optionsRef={optionsRef}
        />
        }
        <div className="option-buttons" ref={optionsRef}>
          <div className="option-button" onClick={handleOptionResidenceClick}>
            <div className="icon">
              <img src={apartmentIcon} alt="Icon Description" style={{ width: '24px', height: '24px' }} />
            </div>
            <div className="text">{residenceType}</div>
          </div>
          <div className="option-button" onClick={handleOptionDrinkingWaterClick}>
            <div className="icon">
              <img src={blueTapIcon} alt="Icon Description" style={{ width: '24px', height: '24px' }} />
            </div>
            <div className="text">{drinkingWaterSource}</div>
          </div>
          <div className="option-button" onClick={handleOptionHotWaterClick}>
            <div className="icon">
              <img src={redTapIcon} alt="Icon Description" style={{ width: '24px', height: '24px' }} />
            </div>
            <div className="text">{hotWaterSource}</div>
          </div>
        </div>
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