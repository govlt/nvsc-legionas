import React, { useRef, useEffect} from 'react';
import '../styles/PreventionInfoModal.css';
interface PreventionInfoModalProps {
    image: React.ReactNode;
    header: string;
    headerSectionContent: React.ReactNode;
    onClose: () => void;
}

export const PreventionInfoModal: React.FC<PreventionInfoModalProps> = ({
  image,
  header,
  headerSectionContent,
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
        <div className="modal-content" ref={wrapperRef}>
          <div className="modalImagePlaceHolder">
            {image}
          </div>
          <div className="content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>{header}</h2>
            {headerSectionContent}
            <h2> Prevencija</h2>
          </div>
        </div>
      </div>
    </>
  );
};