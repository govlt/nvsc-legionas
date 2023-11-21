import { useNavigate } from 'react-router-dom';

const InfoHeader = () => {
  const navigate = useNavigate();
  return(
    <>
    <div className="infoContainer">
      <div className='infoItemContainer'>
        <button className="infoLogo" onClick={() => navigate('/')}>
          <img src="/nvsc-lpl/src/assets/legion.svg" alt="LPL Logotipas"></img>
        </button>
      </div>
      
      <div className='infoItemContainer'>
        <button className="blob" onClick={() => navigate('/svarbu-zinoti')}>
          Svarbu Žinoti
        </button>
      </div>
    </div>
    </>
  )
}

export default InfoHeader;