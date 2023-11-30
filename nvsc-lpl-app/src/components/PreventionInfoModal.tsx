import React, { useRef, useEffect} from 'react';
import '../styles/PreventionInfoModal.css';
interface PreventionInfoModalProps {
    image: React.ReactNode;
    header: string;
    legionInfo: React.ReactNode;
    headerSectionContent: React.ReactNode;
    lowerSection: React.ReactNode;
    onClose: () => void;
}

export const PreventionInfoModal: React.FC<PreventionInfoModalProps> = ({
  image,
  header,
  legionInfo,
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
        <div className="close" onClick={onClose}>&times;</div>
          <div className="modalImagePlaceHolder">
            {image}
          </div>
          <div className="modalInfo">
            <div className='modalContent'>
              <h2 className='modalTitle'>{header}</h2>
              <p className='modalText'>{headerSectionContent}</p>
              {legionInfo}
              {lowerSection}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};