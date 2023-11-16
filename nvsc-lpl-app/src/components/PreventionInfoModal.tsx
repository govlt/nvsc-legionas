import React, { useRef, useEffect} from 'react';
import '../styles/PreventionInfoModal.css';
import { LegionInfo } from './PreventionInfoModalInfoContent/legionInfo';
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
        <div className="modal" ref={wrapperRef}>
          <div className="modalImagePlaceHolder">
            {image}
          </div>
          <div className="modalInfo">
            <span className="close" onClick={onClose}>&times;</span>
            <div className='modalContent'>
              <h2 className='modalHeader'>{header}</h2>
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