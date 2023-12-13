import React from 'react';
import '../styles/ImportantInfo.css';
import { useNavigate } from 'react-router-dom';

type CardProps = {
    image?: string; 
    header: string;
    link: string;
  };

const ImportantInfoCard: React.FC<CardProps> = ({ image, header, link }) => {
  const navigate = useNavigate();
  
  return (
    <div className="importantCardContainer">
      <button className="importantCard" onClick={() => navigate(link)}>
        <div className="importantCardImageContainer">
          {image && <img src={image} alt="Logo" className="importantCardImage"/>}
        </div>
        <div className="importantCardLinkContainer">
          <p className="importantCardHeader">{header}</p>
        </div>
      </button>
    </div>
  );
};

export default ImportantInfoCard;
