import { useNavigate } from 'react-router-dom';
import LPLLogo from '../assets/legion.svg';

const InfoHeader = () => {
  const navigate = useNavigate();
  return(
    <>
      <div className="infoContainer">
        <div className="infoItemContainer">
          <button className="infoLogo" onClick={() => navigate('/')}>
            <img src={LPLLogo} alt="LPL Logotipas"></img>
          </button>
        </div>
      
        <div className="infoItemContainer">
          <button className="blob" onClick={() => navigate('/svarbu-zinoti')}>
          Svarbu žinoti
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoHeader;