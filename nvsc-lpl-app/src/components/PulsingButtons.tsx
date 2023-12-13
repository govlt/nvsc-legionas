import React, { MouseEventHandler } from 'react';

interface HouseItems {
  sinkButton: MouseEventHandler<HTMLButtonElement>,
  bathButton: MouseEventHandler<HTMLButtonElement>,
  showerButton: MouseEventHandler<HTMLButtonElement>,
  heatingButton: MouseEventHandler<HTMLButtonElement>,
  coldButton: MouseEventHandler<HTMLButtonElement>
}

interface SingleButton {
  singleButton: MouseEventHandler<HTMLButtonElement>
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
      <button 
        className="buttonOnImage" 
        style={{top: '33.75%',  left: '42.75%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton} 
        tabIndex={0}
      />
      <button
        className="wave" 
        style={{top: '33.75%',  left: '42.75%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '37%',  left: '59.75%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        tabIndex={0}
      />
      <button 
        className="wave" 
        style={{top: '37%',  left: '59.75%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '25%',  left: '77.75%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '25%',  left: '77.75%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        tabIndex={-1}
      />

      <button 
        className="buttonOnImage" 
        style={{top: '63%',  left: '42.75%', backgroundColor: '#DE1829'}}
        onClick={sinkButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '63%',  left: '42.75%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '66%',  left: '59.75%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '66%',  left: '59.75%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '54%',  left: '77.75%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '54%',  left: '77.75%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        tabIndex={-1}
      />

      <button 
        className="buttonOnImage" 
        style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '78%',  left: '15%'}} 
        onClick={coldButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '78%',  left: '15%'}} 
        onClick={coldButton}
        tabIndex={-1}
      />
    </>
  );
};

export const DaugiabutisAdditionalHot: React.FC<SingleButton> = ({
  singleButton,
}) => {

  return(
    <>
      <button 
        className="buttonOnImage" 
        style={{top: '89%',  left: '15%'}} 
        onClick={singleButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '89%',  left: '15%'}} 
        onClick={singleButton}
        tabIndex={-1}
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


  return(
    <>
      <button 
        className="buttonOnImage" 
        style={{top: '49.75%',  left: '43%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '49.75%',  left: '43%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '54%',  left: '59.75%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '54%',  left: '59.75%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '38%',  left: '78%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '38%',  left: '78%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        tabIndex={-1}
      />

      <button 
        className="buttonOnImage" 
        style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '70.5%',  left: '15.25%'}} 
        onClick={coldButton}
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '70.5%',  left: '15.25%'}} 
        onClick={coldButton}
        tabIndex={-1}
      />
    </>
  );
};