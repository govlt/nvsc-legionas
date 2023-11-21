import React, {useState } from 'react';
import { OptionsButton } from '../components/OptionsButton';
import InfoHeader from '../components/InfoHeader.tsx';
import '../styles/SafetyInfo.css';
import apartamnetsCC from '../assets/daugiabutis_centralizuotai_centralizuotai.png';
import apartamnetsCI from '../assets/daugiabutis_centralizuotai_individualiai.png';
import apartamnetsIC from '../assets/daugiabutis_individualiai_centralizuotai.png';
import apartamnetsII from '../assets/daugiabutis_individualiai_individualiai.png';
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
import { AdditionalInfoBath } from '../components/PreventionInfoModalInfoContent/PreventionInfoBath';
import { PreventionInfoBath } from '../components/PreventionInfoModalInfoContent/PreventionInfoBath';
import { PreventionInfoSink } from '../components/PreventionInfoModalInfoContent/PreventionInfoSink';
import { AdditionalInfoSink } from '../components/PreventionInfoModalInfoContent/PreventionInfoSink';
import { PreventionInfoShower } from '../components/PreventionInfoModalInfoContent/PreventionInfoShower';
import { AdditionalInfoShower } from '../components/PreventionInfoModalInfoContent/PreventionInfoShower';
import { PreventionInfoHeatingPoint } from '../components/PreventionInfoModalInfoContent/PreventionInfoHeatingPoint';
import { AdditionalInfoHeatingPoint } from '../components/PreventionInfoModalInfoContent/PreventionInfoHeatingPoint';
import { PreventionInfoHeater } from '../components/PreventionInfoModalInfoContent/PreventionInfoHeater';
import { AdditionalInfoHeater } from '../components/PreventionInfoModalInfoContent/PreventionInfoHeater';
import { PreventionInfoHotWaterProvider } from '../components/PreventionInfoModalInfoContent/PreventionInfoHotWaterProvider';
import { AdditionalInfoHotWaterProvider } from '../components/PreventionInfoModalInfoContent/PreventionInfoHotWaterProvider';
import { PreventionInfoWaterSite } from '../components/PreventionInfoModalInfoContent/PreventionInfoWaterSite';
import { AdditionalInfoWaterSite } from '../components/PreventionInfoModalInfoContent/PreventionInfoWaterSite';
import { PreventionInfoBoreHole } from '../components/PreventionInfoModalInfoContent/PreventionInfoBoreHole';
import { AdditionalInfoBoreHole } from '../components/PreventionInfoModalInfoContent/PreventionInfoBoreHole';
import { DaugiabutisDefaultButtons, DaugiabutisAdditionalHot, IndividualusDefaultButtons} from '../components/PulsingButtons.tsx';


export const SafetyInfo: React.FC = () => {
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
      <InfoHeader/>
      <div className='ImageOverlayContainer'>
        <div className='imageAndButtonContainer'>
          { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Centralizuotai'
              && hotWaterSource === 'Centralizuotai' &&
              <div className="imageContainer">
                <img className="mainImage" src={apartamnetsCC} alt="Daugiabutis"/>
                <DaugiabutisDefaultButtons
                  sinkButton={handleSinkModalClick}
                  bathButton={handleBathModalClick}
                  showerButton={handleShowerModalClick}
                  heatingButton={handleHeatingPointModalClick}
                  coldButton={handleWaterSiteModalClick}/>
                <DaugiabutisAdditionalHot singleButton={handleHotWaterProviderModalClick}/>
              </div>
            }
            { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Centralizuotai'
              && hotWaterSource === 'Individualiai' &&
              <div className="imageContainer">
                <img className="mainImage" src={apartamnetsCI} alt="Daugiabutis"/>
                <DaugiabutisDefaultButtons
                  sinkButton={handleSinkModalClick}
                  bathButton={handleBathModalClick}
                  showerButton={handleShowerModalClick}
                  heatingButton={handleHeaterModalClick}
                  coldButton={handleWaterSiteModalClick}/>
              </div>
            }
            { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Individualiai'
              && hotWaterSource === 'Centralizuotai' &&
              <div className="imageContainer">
                <img className="mainImage" src={apartamnetsIC} alt="Daugiabutis"/>
                <DaugiabutisDefaultButtons
                  sinkButton={handleSinkModalClick}
                  bathButton={handleBathModalClick}
                  showerButton={handleShowerModalClick}
                  heatingButton={handleHeatingPointModalClick}
                  coldButton={handleBoreHoleModalClick}/>
                <DaugiabutisAdditionalHot singleButton={handleHotWaterProviderModalClick}/>
              </div>
            }
            { residenceType === 'Daugiabutyje' && drinkingWaterSource === 'Individualiai'
              && hotWaterSource === 'Individualiai' &&
              <div className="imageContainer">
                <img className="mainImage" src={apartamnetsII} alt="Daugiabutis"/>
                <DaugiabutisDefaultButtons
                  sinkButton={handleSinkModalClick}
                  bathButton={handleBathModalClick}
                  showerButton={handleShowerModalClick}
                  heatingButton={handleHeaterModalClick}
                  coldButton={handleBoreHoleModalClick}/>
              </div>
            }
            { residenceType === 'Individualiame name' && drinkingWaterSource === 'Centralizuotai'
              && hotWaterSource === 'Individualiai' &&
              <div className="imageContainer">
                <img className="mainImage" src={houseCIG} alt="Namas"/>
                <IndividualusDefaultButtons
                  sinkButton={handleSinkModalClick}
                  bathButton={handleBathModalClick}
                  showerButton={handleShowerModalClick}
                  heatingButton={handleHeaterModalClick}
                  coldButton={handleWaterSiteModalClick}
                />
              </div>
            }
            { residenceType === 'Individualiame name' && drinkingWaterSource === 'Individualiai'
              && hotWaterSource === 'Individualiai' &&
              <div className="imageContainer">
                <img className="mainImage" src={houseIIG} alt="Namas"/>
                <IndividualusDefaultButtons
                  sinkButton={handleSinkModalClick}
                  bathButton={handleBathModalClick}
                  showerButton={handleShowerModalClick}
                  heatingButton={handleHeaterModalClick}
                  coldButton={handleBoreHoleModalClick}
                />
              </div>
            }

          <div className="infoButtons">
            <OptionsButton
              residenceType={residenceType}
              setResidenceType={setResidenceType}
              drinkingWaterSource={drinkingWaterSource}
              setDrinkingWaterSource={setDrinkingWaterSource}
              hotWaterSource={hotWaterSource}
              setHotWaterSource={setHotWaterSource}
            />
          </div>
        </div>
      </div>
      { showBathInfoModal &&
        <PreventionInfoModal
          image={<Bath />}
          header="Vonia"
          headerSectionContent={<PreventionInfoBath />}
          lowerSection={<AdditionalInfoBath/>}
          onClose={handleCloseBathModal}
        />
      }
      { showSinkInfoModal &&
        <PreventionInfoModal
          image={<Sink />}
          header="Kriauklė"
          headerSectionContent={<PreventionInfoSink />}
          lowerSection={<AdditionalInfoSink/>}
          onClose={handleCloseSinkModal}
        />
      }
      { showShowerInfoModal &&
        <PreventionInfoModal
          image={<Shower />}
          header="Dušas"
          headerSectionContent={<PreventionInfoShower />}
          lowerSection={<AdditionalInfoShower/>}
          onClose={handleCloseShowerModal}
        />
      }
      { showHeatingPointInfoModal &&
        <PreventionInfoModal
          image={<HeatingPoint />}
          header="Šilumos punktas"
          headerSectionContent={<PreventionInfoHeatingPoint />}
          lowerSection={<AdditionalInfoHeatingPoint/>}
          onClose={handleCloseHeatingPointModal}
        />
      }
      { showHeaterInfoModal &&
        <PreventionInfoModal
          image={<Heater />}
          header="Vandens šildytuvas"
          headerSectionContent={<PreventionInfoHeater />}
          lowerSection={<AdditionalInfoHeater/>}
          onClose={handleCloseHeaterModal}
        />
      }
      { showHotWaterProviderInfoModal &&
        <PreventionInfoModal
          image={<HotWaterProvider />}
          header="Karšto vandens tiekėjas"
          headerSectionContent={<PreventionInfoHotWaterProvider />}
          lowerSection={<AdditionalInfoHotWaterProvider/>}
          onClose={handleCloseHotWaterProviderModal}
        />
      }
      { showWaterSiteInfoModal &&
        <PreventionInfoModal
          image={<WaterSite />}
          header="Vandenvietė"
          headerSectionContent={<PreventionInfoWaterSite />}
          lowerSection={<AdditionalInfoWaterSite/>}
          onClose={handleCloseWaterSiteModal}
        />
      }
      { showBoreHoleInfoModal &&
        <PreventionInfoModal
          image={<BoreHole />}
          header="Gręžinys"
          headerSectionContent={<PreventionInfoBoreHole />}
          lowerSection={<AdditionalInfoBoreHole/>}
          onClose={handleCloseBoreHoleModal}
        />
      }
    </>
  );
};