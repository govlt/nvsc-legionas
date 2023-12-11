import React, { useState } from 'react';
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
import useImagePreloader from '../hooks/PreloadImages.tsx';
import InteractiveHeader from '../components/InteractiveHeader.tsx';
import HouseSVG from '../assets/daugiabutis_ikona.svg'
import ColdWaterSVG from '../assets/melynas_ciaupas_ikona.svg'
import HotWaterSVG from '../assets/raudonas_ciaupas_ikona.svg'
import SettingsSVG from '../assets/cog.svg'
import { ContactsLink, LegionInfoHeater, LegionInfoHeatingPoint, LegionInfoInside, LegionInfoNothing, LegionInfoRed, RightsAndObligationsLink } from '../components/PreventionInfoModalInfoContent/LegionInfo.tsx';


const preloadSrcList: string[] = [
  apartamnetsCC,
  apartamnetsCI,
  apartamnetsIC,
  apartamnetsII,
  houseCIG,
  houseIIG
];

export const SafetyInfo: React.FC = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
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

  const [footerVisibility, changeVisibility] = useState(true);
  

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

  if (!imagesPreloaded) {
    return <p>Preloading Assets</p>;
  }

  return (
    <>
      <InfoHeader/>
      { residenceType === 'Daugiabutyje' &&
        <div className='firstInteractiveHeader'>
          <InteractiveHeader header="Daugiabutis namas"/>
        </div>
      }
      { residenceType === 'Individualiame name' &&
        <div className='firstInteractiveHeader'>
          <InteractiveHeader header="Individualus namas"/>
        </div>
      }

      <div className="ImageOverlayContainer">
        <div className="imageAndButtonContainer">
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

        </div>
      </div>

      
      <div className="interactiveButtonAndTextContainer interactive1">
        <div className='interactiveButtonContainer'>
          <div className="optionButtons">
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
        { residenceType === 'Daugiabutyje' &&
          <div className='secondInteractiveHeader'>
            <InteractiveHeader header="Daugiabutis namas"/>
          </div>
        }
        { residenceType === 'Individualiame name' &&
          <div className='secondInteractiveHeader'>
            <InteractiveHeader header="Individualus namas"
            />
          </div>
        }
      </div>
      <br/><br/><br/><br/>

      <div className='optionFooter'>
        <div className={`interactiveButtonAndTextContainer interactive2 ${footerVisibility ? 'openFooter' : ''}`}>
          <div className='interactiveButtonContainer'>
            <div className="optionButtons">
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
          { residenceType === 'Daugiabutyje' &&
            <div className='secondInteractiveHeader'>
              <InteractiveHeader header="Daugiabutis namas"/>
            </div>
          }
          { residenceType === 'Individualiame name' &&
            <div className='secondInteractiveHeader'>
              <InteractiveHeader header="Individualus namas"/>
            </div>
          }
          <button className="optionFooterSaveButton" onClick={() => changeVisibility(!footerVisibility)}>
            Išsaugoti
          </button>
        </div>


        <div className={`optionFooterSettings ${footerVisibility ? '' : 'openFooterSettings'}`}>
          <div className='optionFooterItemContainer' style={{marginLeft: '10px'}}>
            <img src={HouseSVG} className="optionFooterImage"></img>
            <p className='optionFooterText'>{residenceType}</p>
          </div>
          <div className='optionFooterItemContainer'>
            <img src={ColdWaterSVG} className="optionFooterImage"></img>
            <p className='optionFooterText'>{drinkingWaterSource}</p>
          </div>
          <div className='optionFooterItemContainer'>
            <img src={HotWaterSVG} className="optionFooterImage"></img>
            <p className='optionFooterText'>{hotWaterSource}</p>
          </div>
          <button className='optionFooterItemContainer optionFooterButton'
              style={{marginRight: '10px'}}
              onClick={() => changeVisibility(!footerVisibility)}>
            <img src={SettingsSVG} className="optionFooterImage"></img>
            <p className='optionFooterText'>
              {footerVisibility? 'Keisti nustatymus': 'Saugoti'}
            </p>
          </button>
        </div>
      </div>


      { showBathInfoModal &&
        <PreventionInfoModal
          image={<Bath />}
          header="Vonia"
          legionInfo={<LegionInfoInside/>}
          headerSectionContent={<PreventionInfoBath />}
          lowerSection={<AdditionalInfoBath/>}
          lowerLink={<RightsAndObligationsLink/>}
          onClose={handleCloseBathModal}
        />
      }
      { showSinkInfoModal &&
        <PreventionInfoModal
          image={<Sink />}
          header="Kriauklė"
          legionInfo={<LegionInfoInside/>}
          headerSectionContent={<PreventionInfoSink />}
          lowerSection={<AdditionalInfoSink/>}
          lowerLink={<RightsAndObligationsLink/>}
          onClose={handleCloseSinkModal}
        />
      }
      { showShowerInfoModal &&
        <PreventionInfoModal
          image={<Shower />}
          header="Dušas"
          legionInfo={<LegionInfoInside/>}
          headerSectionContent={<PreventionInfoShower />}
          lowerSection={<AdditionalInfoShower/>}
          lowerLink={<RightsAndObligationsLink/>}
          onClose={handleCloseShowerModal}
        />
      }
      { showHeatingPointInfoModal &&
        <PreventionInfoModal
          image={<HeatingPoint />}
          header="Šilumos punktas"
          legionInfo={<LegionInfoHeatingPoint/>}
          headerSectionContent={<PreventionInfoHeatingPoint />}
          lowerSection={<AdditionalInfoHeatingPoint/>}
          lowerLink={<ContactsLink/>}
          onClose={handleCloseHeatingPointModal}
        />
      }
      { showHeaterInfoModal &&
        <PreventionInfoModal
          image={<Heater />}
          header="Vandens šildytuvas"
          legionInfo={<LegionInfoHeater/>}
          headerSectionContent={<PreventionInfoHeater />}
          lowerSection={<AdditionalInfoHeater/>}
          lowerLink={<ContactsLink/>}
          onClose={handleCloseHeaterModal}
        />
      }
      { showHotWaterProviderInfoModal &&
        <PreventionInfoModal
          image={<HotWaterProvider />}
          header="Centriniai šilumos tinklai"
          legionInfo={<LegionInfoNothing/>}
          headerSectionContent={<PreventionInfoHotWaterProvider />}
          lowerSection={<AdditionalInfoHotWaterProvider/>}
          lowerLink={<ContactsLink/>}
          onClose={handleCloseHotWaterProviderModal}
        />
      }
      { showWaterSiteInfoModal &&
        <PreventionInfoModal
          image={<WaterSite />}
          header="Geriamojo vandens tiekėjai"
          legionInfo={<LegionInfoNothing/>}
          headerSectionContent={<PreventionInfoWaterSite />}
          lowerSection={<AdditionalInfoWaterSite/>}
          lowerLink={<ContactsLink/>}
          onClose={handleCloseWaterSiteModal}
        />
      }
      { showBoreHoleInfoModal &&
        <PreventionInfoModal
          image={<BoreHole />}
          header="Gręžinys / šulinys"
          legionInfo={<LegionInfoRed/>}
          headerSectionContent={<PreventionInfoBoreHole />}
          lowerSection={<AdditionalInfoBoreHole/>}
          lowerLink={<ContactsLink/>}
          onClose={handleCloseBoreHoleModal}
        />
        
      }
    </>
  );
};