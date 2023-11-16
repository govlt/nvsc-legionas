import { useNavigate } from 'react-router-dom';

const InfoHeader = () => {
  const navigate = useNavigate();
  return(
    <div className="infoContainer">
        <div className='infoItemContainer'>
          <button className="infoLogo" onClick={() => navigate('/')}>
            <img src="/nvsc-lpl/src/assets/legion.svg" alt="Logotipas"></img>
          </button>
        </div>
        <div className='infoItemContainer'>
          <button className="infoButton" onClick={() => navigate('/svarbu-zinoti')}>
            Svarbu Žinoti
          </button>
        </div>
      </div>
  )
}

export default InfoHeader;