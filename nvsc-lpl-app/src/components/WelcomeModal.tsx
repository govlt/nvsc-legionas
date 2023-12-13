import mainImage from '../assets/legionas_pries_legioneles.png';
import React, { useState} from 'react';
import '../styles/PreventionInfoModal.css';

export const WelcomeModal = () => {


  const [fadeModal, setModalFade] = useState(false);

  //commented for modal redowing
  // const delay = (ms: number) => new Promise(
  //   resolve => setTimeout(resolve, ms)
  // );
  
  // const onCloseAction = async () => {
  //   setModalFade(true);
  //   await delay(1000);
  //   focusTrap!.deactivate();
  //   onClose();
  // };

  return (
    <>
      <div id="welcomeModal" className={`welcomeBackground ${fadeModal? 'fadeModalAnimation' : ''}`}>
        <img src={mainImage} alt="Pasisveikinimo nuotrauka" className="welcomeImage"></img>
      </div>
    </>
  );
};