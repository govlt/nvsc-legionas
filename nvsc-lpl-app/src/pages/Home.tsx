import React from 'react';
import { Chart } from '../components/Chart';
import '../styles/Home.css';
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <div style={{ position: 'relative', width: '100%'}}>
      <button style={{ 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        margin: '10px' 
        }}
        onClick={() => navigate("/svarbu-zinoti")}
      >
        Svarbu Žinoti
      </button>
    </div>

    <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        height: '10vh'
    }}>
      <h2>
        LEGIONAS PRIEŠ LEGIONELES
      </h2> 
    </div>

    <div style={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '10vh', 
      width: '700px', 
      margin: 'auto'
    }}>
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
      <button style={{ margin: 'auto' }}>Susipažinti kaip apsisaugoti</button>
    </div>
    <div id="chart" style={{ width: '1200px', height: '600px', margin: 'auto' }}>
      <Chart />
      <p>
        Grafikas parengtas pagal statistikos deparatamento duomenis.
      </p>
    </div>
    </>
  )
}
