import React from 'react';
import '../styles/ImportantInfo.css';

type CardProps = {
    image?: string; 
    header: string;
    text: string;
    onButtonClick: () => void; 
  };

const ImportantInfoCard: React.FC<CardProps> = ({ image, header, text, onButtonClick }) => {
  return (
    <div className='importantCardContainer'>
      <div className='importantCard'>
        <div className='importantCardImageContainer'>
          {image && <img src={image} alt="Logo"/>}
        </div>
        <h3 className='importantCardHeader'>{header}</h3>
        <p className='importantCardText'>{text}</p>
        <button onClick={onButtonClick} className='importantCardButton'>Plačiau</button>
      </div>
    </div>
  );
};




export default ImportantInfoCard;
