import React from 'react';
import '../styles/ImportantInfo.css';
import { Link } from 'react-router-dom';

type CardProps = {
    image?: string; 
    header: string;
    text: string;
    link: string;
  };

const ImportantInfoCard: React.FC<CardProps> = ({ image, header, text, link }) => {
  return (
    <div className="importantCardContainer">
      <div className="importantCard">
        <div className="importantCardImageContainer">
          {image && <img src={image} alt="Logo"/>}
        </div>
        <h3 className="importantCardHeader">{header}</h3>
        <p className="importantCardText">{text}</p>
        <Link to={link} className="importantCardLink">Plačiau</Link>
      </div>
    </div>
  );
};

export default ImportantInfoCard;
