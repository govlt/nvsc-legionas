import mainImage from '../assets/legionas_pries_legioneles.png';
import '../styles/PreventionInfoModal.css';

export const WelcomeModal = () => {
  return (
    <>
      <div id="welcomeModal" className="welcomeBackground">
        <img src={mainImage} alt="Pasisveikinimo nuotrauka" className="welcomeImage"></img>
      </div>
    </>
  );
};