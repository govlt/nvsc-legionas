import React, { useState } from 'react';
import { Chart } from '../components/Chart';
import InfoHeader from '../components/InfoHeader.tsx';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { WelcomeModal } from '../components/WelcomeModal.tsx';
import { Bath } from '../components/PreventionInfoModalPhotos/Bath';


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

      <div className="homeMainText">
        <h3>
          Legioneliozė, nors ir ne visada plačiai aptariama, yra rimta grėsmė visuomenės sveikatai, 
          sukelianti pavojingas ir net mirtinas pasekmes. Ši liga, kurią sukelia bakterijos, vadinamos legionelėmis, 
          dažniausiai plinta per užterštą vandenį, todėl yra svarbu žinoti ir suprasti, kaip to galima išvengti.
        </h3>
      </div>

      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <button className="homeMainButton" onClick={() => navigate('/kaip-apsisaugoti')}>
          Susipažinti kaip apsisaugoti
        </button>
      </div>
      <div id="chart" className='homeChart'>
        <Chart />
        <a className="homeChartText" href = 'https://get.data.gov.lt/datasets/gov/nvsc/uzkreciamos_ligos/atvejai/Bendrieji'>
          Grafikas parengtas pagal statistikos departamento duomenis.
        </a>
        <p>
          Kažkas vykdė šį projektą
        </p>
      </div>
      { showWelcomeModal &&
        <WelcomeModal
          image={<Bath />}
          header="Vonia"
          onClose={handleCloseWelcomeModal}
        />
      }
    </>
  );
};
