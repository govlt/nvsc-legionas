import React, { useRef, useEffect} from 'react';
import '../styles/PreventionInfoModal.css';
import { LegionInfo } from './PreventionInfoModalInfoContent/LegionInfo';
interface PreventionInfoModalProps {
    image: React.ReactNode;
    header: string;
    headerSectionContent: React.ReactNode;
    lowerSection: React.ReactNode;
    onClose: () => void;
}

export const PreventionInfoModal: React.FC<PreventionInfoModalProps> = ({
  image,
  header,
  headerSectionContent,
  lowerSection,
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
            {image}
          </div>
          <div className="modalInfo">
            <div className='modalContent'>
              <h2 className='modalTitle'>{header}</h2>
              <p className='modalText'>{headerSectionContent}</p>
              <LegionInfo/>
              {lowerSection}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};