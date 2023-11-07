import React from 'react';
import { Chart } from '../components/Chart';
import '../styles/Home.css';
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='infoButtonContainer'>
      <button className='infoButton'
        onClick={() => navigate("/svarbu-zinoti")}>
        Svarbu Žinoti
      </button>
    </div>

    <div>
      <h2>
        Legionas prieš legioneles
      </h2> 
    </div>

    <div className='homeMainText'>
      <h3>
      Legioneliozė, nors ir ne visada plačiai aptariama, yra rimta grėsmė visuomenės sveikatai, 
      sukelianti pavojingas ir net mirtinas pasekmes. Ši liga, kurią sukelia bakterijos, vadinamos legionelėmis, 
      dažniausiai plinta per užterštą vandenį, todėl yra svarbu žinoti ir suprasti, kaip galima išvengti.
      </h3>
    </div>

    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <button className='homeMainButton'>Susipažinti kaip apsisaugoti</button>
    </div>
    <div id="chart" style={{ width: '1200px', height: '600px', margin: 'auto' }}>
      <Chart />
      <p className='homeGraphText'>
        Grafikas parengtas pagal statistikos deparatamento duomenis.
      </p>
    </div>
    </>
  )
}
