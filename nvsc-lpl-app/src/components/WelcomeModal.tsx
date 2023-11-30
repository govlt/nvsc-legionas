import mainImage from '../assets/legionas_pries_legioneles.png';
import React, { useRef, useEffect} from 'react';
import '../styles/PreventionInfoModal.css';

interface PreventionInfoModalProps {
    onClose: () => void;
}

export const WelcomeModal: React.FC<PreventionInfoModalProps> = ({
  onClose
}) => {

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
    <div className="welcomeBackground">
        <div className="close" onClick={onClose}>&times;</div>
        <img src={mainImage} className='welcomeImage'></img>
    </div>
    </>
  );
};