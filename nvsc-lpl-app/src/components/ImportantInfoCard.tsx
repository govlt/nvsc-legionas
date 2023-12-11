import React from 'react';
import '../styles/ImportantInfo.css';
import { Link, useNavigate } from 'react-router-dom';

type CardProps = {
    image?: string; 
    header: string;
    link: string;
  };

const ImportantInfoCard: React.FC<CardProps> = ({ image, header, link }) => {
  const navigate = useNavigate();
  
  return (
    <div className="importantCardContainer">
      <div className="importantCard" onClick={() => navigate(link)}>
        <div className="importantCardImageContainer">
          {image && <img src={image} alt="Logo" className='importantCardImage'/>}
        </div>
        <div className='importantCardLinkContainer'>
          <Link to={link} className="importantCardHeader">{header}</Link>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfoCard;
