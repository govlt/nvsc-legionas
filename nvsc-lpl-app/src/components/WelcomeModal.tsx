import mainImage from '../assets/legionas_pries_legioneles.png';
import React, { useRef, useEffect, useState} from 'react';
import '../styles/PreventionInfoModal.css';
import { createFocusTrap } from 'focus-trap';

interface PreventionInfoModalProps {
    onClose: () => void;
}

export const WelcomeModal: React.FC<PreventionInfoModalProps> = ({
  onClose
}) => {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [focusTrap, setFocusTrap] = useState<any>(null);

  const [fadeModal, setModalFade] = useState(false);
  const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const onCloseAction = async () => {
    setModalFade(true);
    await delay(1000);
    focusTrap.deactivate();
    onClose();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onCloseAction();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const trap = createFocusTrap('#welcomeModal');
    trap.activate();
    setFocusTrap(trap);
  }, [])

  return (
    <>
    <div id="welcomeModal" className={`welcomeBackground ${fadeModal? 'fadeModalAnimation' : ''}`}>
      <button 
          className="close" 
          onClick={onCloseAction} 
          tabIndex={1} 
          role="button" 
          aria-label="Close modal"
          onKeyDown={(e) => { if (e.key === 'Enter') onCloseAction(); }}
      >
          &times;
      </button>
        <img src={mainImage} className='welcomeImage'></img>
    </div>
    </>
  );
};