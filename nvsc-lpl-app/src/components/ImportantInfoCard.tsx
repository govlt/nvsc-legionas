import React from 'react';
import '../styles/ImportantInfo.css';
import { Link } from 'react-router-dom';

type CardProps = {
    image?: string; 
    header: string;
    link: string;
  };

const ImportantInfoCard: React.FC<CardProps> = ({ image, header, link }) => {
  return (
    <div className="importantCardContainer">
      <div className="importantCard">
        <div className="importantCardImageContainer">
          {image && <img src={image} alt="Logo" className='importantCardImage'/>}
        </div>
        <Link to={link} className="importantCardHeader">{header}</Link>
      </div>
    </div>
  );
};

export default ImportantInfoCard;
