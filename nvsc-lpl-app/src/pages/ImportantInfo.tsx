import React from 'react';
import ImportantInfoCard from '../components/ImportantInfoCard';
import { useNavigate } from "react-router-dom";


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
            image="src/styles/images/legionele.jpg"
            header="Kas yra legioneliozė?"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/legionelioze")}
        />
        <ImportantInfoCard 
            image="/path/to/image.jpg"
            header="Kokios prevencinės priemonės?"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/prevencija")}
        />
        <ImportantInfoCard 
            image="/path/to/image.jpg"
            header="Mano teisės ir pareigos"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/teises-atsakomybes")}
        />
        <ImportantInfoCard 
            image="/path/to/image.jpg"
            header="Institucijų ir įmonių atsakomybės ir kontaktai"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/kontaktai")}
        />
        <ImportantInfoCard 
            image="/path/to/image.jpg"
            header="Geriamojo vandens tyrimų programos"
            text="Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. 
            pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo 
            raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių."
            onButtonClick={() => navigate("/geriamojo-vandens-tyrimu-programos")}
        />
        <ImportantInfoCard 
            image="/path/to/image.jpg"
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