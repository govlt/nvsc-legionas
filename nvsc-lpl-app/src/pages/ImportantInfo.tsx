import React, {useEffect} from 'react';
import InfoHeader from '../components/InfoHeader.tsx';
import ImportantInfoCard from '../components/ImportantInfoCard.tsx';
import '../styles/ImportantInfo.css';
import legioneleIcon from '../assets/legioneles_ikona.svg';
import prevencijaIcon from '../assets/prevencija_ikona.svg';
import rightsAndObligationsIcon from '../assets/teises_ikona.svg';
import contactsIcon from '../assets/kontaktai_ikona.svg';
import waterTestsIcon from '../assets/tyrimai_ikona.svg';
import faqIcon from '../assets/duk_ikona.svg';
import { useNavigate } from 'react-router-dom';


export const ImportantInfo: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {window.scrollTo(0, 0);};
  }, []);

  return (
    <>
      <InfoHeader/>
      
      <div className='importantWindowContainer'>
        <div className="importantContainer">
          <div className='importantHeaderContainer'>
            <h1 className="importantHeader">
              Svarbu žinoti
            </h1>
            <div className='importantInfoMainButtonContainer'>
              <button className="importantInfoMainButton" onClick={() => navigate('/kaip-apsisaugoti')}>
                Susipažinti kaip apsisaugoti
              </button>
            </div>
          </div>

          <div className="importantGrid">
            <ImportantInfoCard 
              image={legioneleIcon}
              header="Kas yra legioneliozė?"
              link={'/legionelioze'}
            />
            <ImportantInfoCard 
              image={prevencijaIcon}
              header="Kokios prevencinės priemonės?"
              link={'/prevencija'}
            />
            <ImportantInfoCard 
              image={rightsAndObligationsIcon}
              header="Mano teisės ir pareigos"
              link={'/teises-atsakomybes'}
            />
            <ImportantInfoCard 
              image={contactsIcon}
              header="Institucijų ir įmonių atsakomybės ir kontaktai"
              link={'/kontaktai'}
            />
            <ImportantInfoCard 
              image={waterTestsIcon}
              header="Geriamojo vandens tyrimų programos"
              link={'/geriamojo-vandens-tyrimu-programos'}
            />
            <ImportantInfoCard 
              image={faqIcon}
              header="DUK"
              link={'/duk'}
            />
          </div>
        </div>
      </div>
    </>
  );
};