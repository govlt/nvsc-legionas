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
    <a className="buttonOnImage" style={{top: '33.75%',  left: '42.75%'}} onClick={sinkButton}></a>
    <a className="wave" style={{top: '33.75%',  left: '42.75%'}} onClick={sinkButton}></a>
    <a className="buttonOnImage" style={{top: '37%',  left: '59%'}} onClick={bathButton}></a>
    <a className="wave" style={{top: '37%',  left: '59%'}} onClick={bathButton}></a>
    <a className="buttonOnImage" style={{top: '25%',  left: '77%'}} onClick={showerButton}></a>
    <a className="wave" style={{top: '25%',  left: '77%'}} onClick={showerButton}></a>

    <a className="buttonOnImage" style={{top: '62.25%',  left: '42.75%'}} onClick={sinkButton}></a>
    <a className="wave" style={{top: '62.25%',  left: '42.75%'}} onClick={sinkButton}></a>
    <a className="buttonOnImage" style={{top: '65.5%',  left: '59%'}} onClick={bathButton}></a>
    <a className="wave" style={{top: '65.5%',  left: '59%'}} onClick={bathButton}></a>
    <a className="buttonOnImage" style={{top: '54%',  left: '77%'}} onClick={showerButton}></a>
    <a className="wave" style={{top: '54%',  left: '77%'}} onClick={showerButton}></a>

    <a className="buttonOnImage" style={{top: '83.5%',  left: '22%'}} onClick={heatingButton}></a>
    <a className="wave" style={{top: '83.5%',  left: '22%'}} onClick={heatingButton}></a>
    <a className="buttonOnImage" style={{top: '77.5%',  left: '13.5%'}} onClick={coldButton}></a>
    <a className="wave" style={{top: '77.5%',  left: '13.5%'}} onClick={coldButton}></a>
    </>
  );
};

export const DaugiabutisAdditionalHot: React.FC<SingleButton> = ({
  singleButton,
}) => {
  return(
    <>
    <a className="buttonOnImage" style={{top: '88.25%',  left: '13.5%'}} onClick={singleButton}></a>
    <a className="wave" style={{top: '88.25%',  left: '13.5%'}} onClick={singleButton}></a>
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
    <a className="buttonOnImage" style={{top: '49%',  left: '43%'}} onClick={sinkButton}></a>
    <a className="wave" style={{top: '49%',  left: '43%'}} onClick={sinkButton}></a>
    <a className="buttonOnImage" style={{top: '54%',  left: '59.75%'}} onClick={bathButton}></a>
    <a className="wave" style={{top: '54%',  left: '59.75%'}} onClick={bathButton}></a>
    <a className="buttonOnImage" style={{top: '38%',  left: '77.5%'}} onClick={showerButton}></a>
    <a className="wave" style={{top: '38%',  left: '77.5%'}} onClick={showerButton}></a>

    <a className="buttonOnImage" style={{top: '79%',  left: '39%'}} onClick={heatingButton}></a>
    <a className="wave" style={{top: '79%',  left: '39%'}} onClick={heatingButton}></a>
    <a className="buttonOnImage" style={{top: '69.75%',  left: '13.75%'}} onClick={coldButton}></a>
    <a className="wave" style={{top: '69.75%',  left: '13.75%'}} onClick={coldButton}></a>
    </>
  );
};