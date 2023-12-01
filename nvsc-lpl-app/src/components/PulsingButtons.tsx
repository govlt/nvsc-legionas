import React, { KeyboardEvent, MouseEventHandler } from 'react';

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

  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    callback: MouseEventHandler<HTMLAnchorElement>
  ): void => {
    if (event.key === 'Enter') {
      callback(event as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>);
    }
  };

  return(
    <>
    <a 
      className="buttonOnImage" 
      style={{top: '33.75%',  left: '42.75%', backgroundColor: '#DE1829'}} 
      onClick={sinkButton} 
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, sinkButton)}
    />
    <a 
      className="wave" 
      style={{top: '33.75%',  left: '42.75%', backgroundColor: '#DE1829'}} 
      onClick={sinkButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '37%',  left: '59.75%', backgroundColor: '#DE1829'}} 
      onClick={bathButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, bathButton)}
    />
    <a 
      className="wave" 
      style={{top: '37%',  left: '59.75%', backgroundColor: '#DE1829'}} 
      onClick={bathButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '25%',  left: '77.75%', backgroundColor: '#DE1829'}} 
      onClick={showerButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, showerButton)}
    />
    <a 
      className="wave" 
      style={{top: '25%',  left: '77.75%', backgroundColor: '#DE1829'}} 
      onClick={showerButton}
    />

    <a 
      className="buttonOnImage" 
      style={{top: '63%',  left: '42.75%', backgroundColor: '#DE1829'}}
      onClick={sinkButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, sinkButton)}
    />
    <a 
      className="wave" 
      style={{top: '63%',  left: '42.75%', backgroundColor: '#DE1829'}} 
      onClick={sinkButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '66%',  left: '59.75%', backgroundColor: '#DE1829'}} 
      onClick={bathButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, bathButton)}
    />
    <a 
      className="wave" 
      style={{top: '66%',  left: '59.75%', backgroundColor: '#DE1829'}} 
      onClick={bathButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '54%',  left: '77.75%', backgroundColor: '#DE1829'}} 
      onClick={showerButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, showerButton)}
    />
    <a 
      className="wave" 
      style={{top: '54%',  left: '77.75%', backgroundColor: '#DE1829'}} 
      onClick={showerButton}
    />

    <a 
      className="buttonOnImage" 
      style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} 
      onClick={heatingButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, heatingButton)}
    />
    <a 
      className="wave" 
      style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} 
      onClick={heatingButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '78%',  left: '15%'}} 
      onClick={coldButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, coldButton)}
    />
    <a 
      className="wave" 
      style={{top: '78%',  left: '15%'}} 
      onClick={coldButton}
    />
    </>
  );
};

export const DaugiabutisAdditionalHot: React.FC<SingleButton> = ({
  singleButton,
}) => {

  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    callback: MouseEventHandler<HTMLAnchorElement>
  ): void => {
    if (event.key === 'Enter') {
      callback(event as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>);
    }
  };

  return(
    <>
    <a 
      className="buttonOnImage" 
      style={{top: '89%',  left: '15%'}} 
      onClick={singleButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, singleButton)}
    />
    <a 
      className="wave" 
      style={{top: '89%',  left: '15%'}} 
      onClick={singleButton}
    />
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

  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    callback: MouseEventHandler<HTMLAnchorElement>
  ): void => {
    if (event.key === 'Enter') {
      callback(event as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>);
    }
  };

  return(
    <>
    <a 
      className="buttonOnImage" 
      style={{top: '49.75%',  left: '43%', backgroundColor: '#DE1829'}} 
      onClick={sinkButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, sinkButton)}
    />
    <a 
      className="wave" 
      style={{top: '49.75%',  left: '43%', backgroundColor: '#DE1829'}} 
      onClick={sinkButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '54%',  left: '59.75%', backgroundColor: '#DE1829'}} 
      onClick={bathButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, bathButton)}
    />
    <a 
      className="wave" 
      style={{top: '54%',  left: '59.75%', backgroundColor: '#DE1829'}} 
      onClick={bathButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '38%',  left: '78%', backgroundColor: '#DE1829'}} 
      onClick={showerButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, showerButton)}
    />
    <a 
      className="wave" 
      style={{top: '38%',  left: '78%', backgroundColor: '#DE1829'}} 
      onClick={showerButton}
    />

    <a 
      className="buttonOnImage" 
      style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} 
      onClick={heatingButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, heatingButton)}
    />
    <a 
      className="wave" 
      style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} 
      onClick={heatingButton}
    />
    <a 
      className="buttonOnImage" 
      style={{top: '70.5%',  left: '15.25%'}} 
      onClick={coldButton}
      tabIndex={0} 
      onKeyDown={(e) => handleKeyDown(e, coldButton)}
    />
    <a 
      className="wave" 
      style={{top: '70.5%',  left: '15.25%'}} 
      onClick={coldButton}
    />
    </>
  );
};