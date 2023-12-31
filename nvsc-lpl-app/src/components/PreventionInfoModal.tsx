import React, { useRef, useEffect, useState } from 'react';
import '../styles/PreventionInfoModal.css';
import { createFocusTrap, FocusTrap } from 'focus-trap';

interface PreventionInfoModalProps {
  image: React.ReactNode;
  header: string;
  legionInfo: React.ReactNode;
  headerSectionContent: React.ReactNode;
  lowerSection: React.ReactNode;
  lowerLink: React.ReactElement;
  onClose: () => void;
}

export const PreventionInfoModal: React.FC<PreventionInfoModalProps> = ({
  image,
  header,
  legionInfo,
  headerSectionContent,
  lowerSection,
  lowerLink,
  onClose
}) => {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [focusTrap, setFocusTrap] = useState<FocusTrap | null>(null);

  const onCloseAction = () => {
    focusTrap?.deactivate();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  useEffect(() => {
    const trap = createFocusTrap('#preventionInfoModal');
    trap.activate();
    setFocusTrap(trap);
  }, []);

  const lowerLinkWithOnClick = React.cloneElement(lowerLink, { onClick: onCloseAction });

  return (
    <>
      <div id="preventionInfoModal" className="modalBackground">
        <div className="modal" ref={wrapperRef}>
          <button 
            className="close" 
            onClick={onCloseAction} 
            aria-label={`Uždaryti informaciją apie ${header}`}
          >
          &times;
          </button>
          <div className="modalImagePlaceHolder">
            {image}
          </div>
          <div className="modalInfo">
            <div className="modalContent">
              <h2 className="modalTitle">{header}</h2>
              <p className="modalText">{headerSectionContent}</p>
              {legionInfo}
              {lowerSection}
              <div>
                {lowerLinkWithOnClick}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};