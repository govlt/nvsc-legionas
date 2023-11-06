import React from 'react';

type CardProps = {
    image?: string; 
    header: string;
    text: string;
    onButtonClick: () => void; 
  };

const ImportantInfoCard: React.FC<CardProps> = ({ image, header, text, onButtonClick }) => {
  return (
    <div style={styles.card}>
      {image && <img src={image} alt="Card" style={styles.image} />}
      <h3 style={styles.header}>{header}</h3>
      <p style={styles.text}>{text}</p>
      <button onClick={onButtonClick} style={styles.button}>Plačiau</button>
    </div>
  );
};

const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      width: '300px', 
      margin: '0',
      textAlign: 'center' as const,
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100px',
      objectFit: 'cover' as const,
    },
    header: {
      fontSize: '1.2em',
      margin: '10px 0'
    },
    text: {
      fontSize: '1em',
      margin: '10px 0'
    },
    button: {
      background: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer'
    },
  };
  


export default ImportantInfoCard;
