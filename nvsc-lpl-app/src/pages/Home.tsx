import React, { useEffect, useState } from 'react';
import { Chart } from '../components/Chart';
import InfoHeader from '../components/InfoHeader.tsx';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { WelcomeModal } from '../components/WelcomeModal.tsx';
import KTULogo from '../assets/KTUIF.svg';
import NVSCLogo from '../assets/NVSC.svg';
import LRVKLogo from '../assets/LRVK.svg';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  useEffect(() => {
    // localStorage vs sessionStorage???
    const savedState = sessionStorage.getItem("welcomeModal");
    if (savedState) return;
    setShowWelcomeModal(true);
    sessionStorage.setItem("welcomeModal", "true");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <InfoHeader/>
      <div>
        <h1 className='homeMainHeader'>
          Legionas prieš legioneles
        </h1> 
      </div>

      <div className='homeMainTextGridContainer'>
        <div className='homeMainTextContainer'>
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

      <div className='homeMainButtonContainer'>
        <button className="homeMainButton" onClick={() => navigate('/kaip-apsisaugoti')}>
          Susipažinti kaip apsisaugoti
        </button>
      </div>
      <div id="chart" className='homeChart'>
        <Chart />
        <a className="homeChartText" href = 'https://get.data.gov.lt/datasets/gov/nvsc/uzkreciamos_ligos/atvejai/Bendrieji'>
          Grafikas parengtas pagal statistikos departamento duomenis.
        </a>
        <div className='homeFiller'>

        </div>
        <div className='homeFooter'>
          <p>
            Projektas gimė siekiant padididinti gyventojų sąmoningumą kovoje su legionelioze. Projekto partneriai: 
          </p>
          <div className='homeFooterPartnerContainer'>
            <div className='homeFooterPartner'>
              <img src={KTULogo} className='homeFooterImage'></img>
            </div>
            <div className='homeFooterPartner'>
              <img src={NVSCLogo} className='homeFooterImage'></img>
            </div>
            <div className='homeFooterPartner'>
              <img src={LRVKLogo} className='homeFooterImage'></img>
            </div>
          </div>
        </div>
      </div>
      { showWelcomeModal &&
        <WelcomeModal
          onClose={handleCloseWelcomeModal}
        />
      }
    </>
  );
};
