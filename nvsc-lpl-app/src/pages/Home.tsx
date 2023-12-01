import React, { useState } from 'react';
import { Chart } from '../components/Chart';
import InfoHeader from '../components/InfoHeader.tsx';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { WelcomeModal } from '../components/WelcomeModal.tsx';


export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <>
      <InfoHeader/>
      <div>
        <h2 className='homeMainHeader'>
          Legionas prieš legioneles
        </h2> 
      </div>

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
        <p className='homeFooterText'>
          Projektas gimė siekiant padididinti gyventojų sąmoningumą kovoje su legionelioze. Projekto partneriai: 
        </p>
      </div>
      { showWelcomeModal &&
        <WelcomeModal
          onClose={handleCloseWelcomeModal}
        />
      }
    </>
  );
};
