import React, { useEffect, useState } from 'react';
import { Chart } from '../components/Chart';
import InfoHeader from '../components/InfoHeader.tsx';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { WelcomeModal } from '../components/WelcomeModal.tsx';
import KTULogo from '../assets/KTUIF.svg';
import NVSCLogo from '../assets/NVSC.svg';
import LRVKLogo from '../assets/LRVK.svg';
import useImagePreloader from '../hooks/PreloadImages.tsx';
import { preloadImageList } from '../preloadImageList.tsx';
import CircularProgress from '@mui/material/CircularProgress';

export const Home: React.FC = () => {
  const {imagesPreloaded} = useImagePreloader(preloadImageList);

  const navigate = useNavigate();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // localStorage vs sessionStorage???
    const savedState = sessionStorage.getItem('welcomeModal');
    if (savedState) return;
    setShowWelcomeModal(true);
    sessionStorage.setItem('welcomeModal', 'true');
  }, []);

  useEffect(() => {
    return () => {window.scrollTo(0, 0);};
  }, []);

  if (!imagesPreloaded) {
    return (
      <CircularProgress />
    );
  }

  return (
    <>
      <InfoHeader/>

      <div className="homeWindowCenteringContainer">
        <div className="homeWindowContainer">
          <div>
            <h1 className="homeMainHeader">
              Legionas prieš legioneles
            </h1> 
          </div>

          <div className="homeMainTextGridContainer">
            <div className="homeMainTextContainer">
              <h3>
                Legioneliozė, nors ir ne visada plačiai aptariama,
                yra rimta grėsmė visuomenės sveikatai, 
                sukelianti pavojingas ir net mirtinas pasekmes.
              </h3>
              <h3>
                Ši liga, kurią sukelia bakterijos, vadinamos legionelėmis, 
                dažniausiai plinta per užterštą vandenį,
                todėl yra svarbu žinoti ir suprasti, kaip to galima išvengti.
              </h3>
              <h3>
                Mes visi kartu esame „legionas“,
                tad sutelkdami jėgas ir atsakingai rūpindamiesi,
                kokį vandenį vartojame,
                galime duoti atkirtį bakterijoms
                ir įveikti šį nematomą pavojų mūsų sveikatai.
              </h3>
            </div>
          </div>

          <div className="homeMainButtonContainer">
            <button className="homeMainButton" onClick={() => navigate('/kaip-apsisaugoti')}>
              Susipažinti kaip apsisaugoti
            </button>
          </div>

          <div className="homeChartContainer">
            <div id="chart" className="homeChart">
              <Chart/>
            </div>
            <div className="chartFiller"></div>
            <a className="homeChartText"
              href = "https://get.data.gov.lt/datasets/gov/nvsc/uzkreciamos_ligos/atvejai/Bendrieji">
              Grafikas parengtas pagal statistikos departamento duomenis.
            </a>
          </div>
        </div>
      </div>

      <div className="homeFiller"></div>
      <div className="homeFooter">
        <p>
          Projektas gimė siekiant padididinti gyventojų
          sąmoningumą kovoje su legionelioze.
          Projekto partneriai: 
        </p>
        <div className="homeFooterPartnerContainer">
          <div className="homeFooterPartner">
            <a href="https://ktu.edu" target="_blank" rel="noopener noreferrer" >
              <img src={KTULogo} alt="KTU logotipas" className="homeFooterImage" />
            </a>
          </div>
          <div className="homeFooterPartner">
            <a href="https://nvsc.lrv.lt" target="_blank" rel="noopener noreferrer" >
              <img src={NVSCLogo} alt="NVSC logotipas" className="homeFooterImage" />
            </a>
          </div>
          <div className="homeFooterPartner">
            <a href="https://lrvk.lrv.lt" target="_blank" rel="noopener noreferrer" >
              <img src={LRVKLogo} alt="LRVK logotipas" className="homeFooterImage" />
            </a>
          </div>
        </div>
      </div>

      
      
      { showWelcomeModal &&
        <WelcomeModal />
      }
    </>
  );
};
