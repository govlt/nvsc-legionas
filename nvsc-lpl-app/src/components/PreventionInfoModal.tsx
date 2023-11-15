import React from 'react';
import '../styles/PreventionInfoModal.css';
interface PreventionInfoModalProps {
    image: React.ReactNode;
}

export const PreventionInfoModal: React.FC<PreventionInfoModalProps> = ({
  image,
}) => {

  return (
    <>
      <div className="modalBackground">
        <div className="modal-content">
          <div className="imagePlaceHolder">
            {image}
          </div>
          <div className="content">
            <h2>Vonia</h2>
            <p> prevencija</p>
          </div>
        </div>
      </div>
    </>
  );
};