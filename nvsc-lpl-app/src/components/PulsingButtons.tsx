import React, {MouseEventHandler} from 'react';

interface HouseItems {
  sinkButton: MouseEventHandler<HTMLAnchorElement>,
  bathButton: MouseEventHandler<HTMLAnchorElement>,
  showerButton: MouseEventHandler<HTMLAnchorElement>,
  heatingButton: MouseEventHandler<HTMLAnchorElement>,
  coldButton: MouseEventHandler<HTMLAnchorElement>
}

interface SingleButton {
  singleButton: MouseEventHandler<HTMLAnchorElement>
}

export const DaugiabutisDefaultButtons: React.FC<HouseItems> = ({
  sinkButton, 
  bathButton, 
  showerButton,
  heatingButton,
  coldButton
}) => {
  return(
    <>
    <a className="buttonOnImage" style={{top: '33.75%',  left: '42.75%', backgroundColor: '#DE1829'}} onClick={sinkButton}></a>
    <a className="wave" style={{top: '33.75%',  left: '42.75%', backgroundColor: '#DE1829'}} onClick={sinkButton}></a>
    <a className="buttonOnImage" style={{top: '37%',  left: '59.75%', backgroundColor: '#DE1829'}} onClick={bathButton}></a>
    <a className="wave" style={{top: '37%',  left: '59.75%', backgroundColor: '#DE1829'}} onClick={bathButton}></a>
    <a className="buttonOnImage" style={{top: '25%',  left: '77.75%', backgroundColor: '#DE1829'}} onClick={showerButton}></a>
    <a className="wave" style={{top: '25%',  left: '77.75%', backgroundColor: '#DE1829'}} onClick={showerButton}></a>

    <a className="buttonOnImage" style={{top: '63%',  left: '42.75%', backgroundColor: '#DE1829'}} onClick={sinkButton}></a>
    <a className="wave" style={{top: '63%',  left: '42.75%', backgroundColor: '#DE1829'}} onClick={sinkButton}></a>
    <a className="buttonOnImage" style={{top: '66%',  left: '59.75%', backgroundColor: '#DE1829'}} onClick={bathButton}></a>
    <a className="wave" style={{top: '66%',  left: '59.75%', backgroundColor: '#DE1829'}} onClick={bathButton}></a>
    <a className="buttonOnImage" style={{top: '54%',  left: '77.75%', backgroundColor: '#DE1829'}} onClick={showerButton}></a>
    <a className="wave" style={{top: '54%',  left: '77.75%', backgroundColor: '#DE1829'}} onClick={showerButton}></a>

    <a className="buttonOnImage" style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} onClick={heatingButton}></a>
    <a className="wave" style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} onClick={heatingButton}></a>
    <a className="buttonOnImage" style={{top: '78%',  left: '15%'}} onClick={coldButton}></a>
    <a className="wave" style={{top: '78%',  left: '15%'}} onClick={coldButton}></a>
    </>
  );
};

export const DaugiabutisAdditionalHot: React.FC<SingleButton> = ({
  singleButton,
}) => {
  return(
    <>
    <a className="buttonOnImage" style={{top: '89%',  left: '15%'}} onClick={singleButton}></a>
    <a className="wave" style={{top: '89%',  left: '15%'}} onClick={singleButton}></a>
    </>
  );
};

export const IndividualusDefaultButtons: React.FC<HouseItems> = ({
  sinkButton, 
  bathButton, 
  showerButton,
  heatingButton,
  coldButton
}) => {
  return(
    <>
    <a className="buttonOnImage" style={{top: '49.75%',  left: '43%', backgroundColor: '#DE1829'}} onClick={sinkButton}></a>
    <a className="wave" style={{top: '49.75%',  left: '43%', backgroundColor: '#DE1829'}} onClick={sinkButton}></a>
    <a className="buttonOnImage" style={{top: '54%',  left: '59.75%', backgroundColor: '#DE1829'}} onClick={bathButton}></a>
    <a className="wave" style={{top: '54%',  left: '59.75%', backgroundColor: '#DE1829'}} onClick={bathButton}></a>
    <a className="buttonOnImage" style={{top: '38%',  left: '78%', backgroundColor: '#DE1829'}} onClick={showerButton}></a>
    <a className="wave" style={{top: '38%',  left: '78%', backgroundColor: '#DE1829'}} onClick={showerButton}></a>

    <a className="buttonOnImage" style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} onClick={heatingButton}></a>
    <a className="wave" style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} onClick={heatingButton}></a>
    <a className="buttonOnImage" style={{top: '70.5%',  left: '15.25%'}} onClick={coldButton}></a>
    <a className="wave" style={{top: '70.5%',  left: '15.25%'}} onClick={coldButton}></a>
    </>
  );
};