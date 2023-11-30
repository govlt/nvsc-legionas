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
      <div className="modalBackground">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal" ref={wrapperRef}>  
          <div className="modalImagePlaceHolder">
            
            {mainImage}
          </div>
        </div>
      </div>
    </>
  );
};