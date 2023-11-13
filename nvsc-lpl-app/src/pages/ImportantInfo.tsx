import React from 'react';
import ImportantInfoCard from '../components/ImportantInfoCard';
import { useNavigate } from "react-router-dom";
import legioneleIcon from '../assets/legioneles_ikona.svg';
import prevencijaIcon from '../assets/prevencija_ikona.svg';
import rightsAndObligationsIcon from '../assets/teises_ikona.svg';
import contactsIcon from '../assets/kontaktai_ikona.svg';
import waterTestsIcon from '../assets/tyrimai_ikona.svg';
import faqIcon from '../assets/duk_ikona.svg';


export const ImportantInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='infoButtonContainer'>
      <button className='infoButton'
        onClick={() => navigate("/svarbu-zinoti")}>
        Svarbu Žinoti
      </button>
    </div>
    <div className='importantContainer'>
      <div>
        <p className='importantHeader'>Svarbu žinoti</p>
      </div>
      <div className='importantGrid'>
        <ImportantInfoCard 
            image={legioneleIcon}
            header="Kas yra legioneliozė?"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/legionelioze")}
        />
        <ImportantInfoCard 
            image={prevencijaIcon}
            header="Kokios prevencinės priemonės?"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/prevencija")}
        />
        <ImportantInfoCard 
            image={rightsAndObligationsIcon}
            header="Mano teisės ir pareigos"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/teises-atsakomybes")}
        />
        <ImportantInfoCard 
            image={contactsIcon}
            header="Institucijų ir įmonių atsakomybės ir kontaktai"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/kontaktai")}
        />
        <ImportantInfoCard 
            image={waterTestsIcon}
            header="Geriamojo vandens tyrimų programos"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/geriamojo-vandens-tyrimu-programos")}
        />
        <ImportantInfoCard 
            image={faqIcon}
            header="DUK"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/duk")}
        />
      </div>
    </div>
    </>
  )
}