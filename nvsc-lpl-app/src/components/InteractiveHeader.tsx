import React from 'react';
import { Link } from 'react-router-dom';

interface InteractiveHeaderProps {
  header: string;
}

const ExtraInfoIndividual = () => {
  return(
    <>
      <p className="interactiveText">
        Mano atsakomybė prižiūrėti, kad vandens temperatūra nebūtų žemesnė nei&nbsp;
        <span style={{color: 'red'}}>50°</span>,
        bei prižiūrėti karšto vandens įrenginių būklę, reguliariai dezinfekuoti
        <br/>
        (Išsamiau „
        <Link className="link" to="/teises-atsakomybes">Mano teisės ir pareigos</Link>
        “).
      </p>
    </>
  )
}

const ExtraInfoPublic = () => {
  return(
    <>
      <p className="interactiveText">
        Mano atsakomybė prižiūrėti karšto vandens įrenginių būklę, juos reguliariai dezinketuoti
        <br/>
        Išamiau:&nbsp;
        <Link className="link" to="/teises-atsakomybes">Mano teisės ir pareigos</Link>
      </p>
    </>
  )
}

const InteractiveHeader: React.FC<InteractiveHeaderProps> = ({
  header,
}) => {

  return(
    <>
      <div className="interactiveTextContainer">
        <h3 className="interactiveHeader">
          {header}
        </h3>
        {header == "Individualus namas"? <ExtraInfoIndividual/> : <ExtraInfoPublic/>}
      </div>
    </>
  );
};

export default InteractiveHeader;