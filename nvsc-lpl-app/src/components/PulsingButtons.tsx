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
        style={{top: '33%',  left: '42.5%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        aria-label="Atidaryti prevencinę informaciją apie kriauklę"
        tabIndex={0}
      />
      <button
        className="wave" 
        style={{top: '33%',  left: '42.5%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        aria-label="Atidaryti prevencinę informaciją apie kriauklę"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '37%',  left: '55%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        aria-label="Atidaryti prevencinę informaciją apie vonią"
        tabIndex={0}
      />
      <button 
        className="wave" 
        style={{top: '37%',  left: '55%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        aria-label="Atidaryti prevencinę informaciją apie vonią"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '25%',  left: '74%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        aria-label="Atidaryti prevencinę informaciją apie dušą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '25%',  left: '74%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        aria-label="Atidaryti prevencinę informaciją apie dušą"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '62%',  left: '42.5%', backgroundColor: '#DE1829'}}
        onClick={sinkButton}
        aria-label="Atidaryti prevencinę informaciją apie kriauklę"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '62%',  left: '42.5%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        aria-label="Atidaryti prevencinę informaciją apie kriauklę"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '66%',  left: '55%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        aria-label="Atidaryti prevencinę informaciją apie vonią"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '66%',  left: '55%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        aria-label="Atidaryti prevencinę informaciją apie vonią"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '54%',  left: '74%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        aria-label="Atidaryti prevencinę informaciją apie dušą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '54%',  left: '74%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        aria-label="Atidaryti prevencinę informaciją apie dušą"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        aria-label="Atidaryti informaciją apie šildytuvą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '84%',  left: '45%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        aria-label="Atidaryti informaciją apie šildytuvą"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '78%',  left: '15%'}} 
        onClick={coldButton}
        aria-label="Atidaryti informaciją apie vandens tiekimą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '78%',  left: '15%'}} 
        onClick={coldButton}
        aria-label="Atidaryti informaciją apie vandens tiekimą"
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
        aria-label="Atidaryti prevencinę informaciją"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '89%',  left: '15%'}} 
        onClick={singleButton}
        aria-label="Atidaryti prevencinę informaciją"
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
        style={{top: '49%',  left: '43%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        aria-label="Atidaryti prevencinę informaciją apie kriauklę"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '49%',  left: '43%', backgroundColor: '#DE1829'}} 
        onClick={sinkButton}
        aria-label="Atidaryti prevencinę informaciją apie kriauklę"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '54%',  left: '55%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        aria-label="Atidaryti prevencinę informaciją apie vonią"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '54%',  left: '55%', backgroundColor: '#DE1829'}} 
        onClick={bathButton}
        aria-label="Atidaryti prevencinę informaciją apie vonią"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '38%',  left: '74%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        aria-label="Atidaryti prevencinę informaciją apie dušą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '38%',  left: '74%', backgroundColor: '#DE1829'}} 
        onClick={showerButton}
        aria-label="Atidaryti prevencinę informaciją apie dušą"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        aria-label="Atidaryti prevencinę informaciją apie šildytuvą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '80%',  left: '39%', backgroundColor: '#DE1829'}} 
        onClick={heatingButton}
        aria-label="Atidaryti prevencinę informaciją apie šildytuvą"
        tabIndex={-1}
      />
      <button 
        className="buttonOnImage" 
        style={{top: '70.5%',  left: '15.25%'}} 
        onClick={coldButton}
        aria-label="Atidaryti prevencinę informaciją apie vandens tiekimą"
        tabIndex={0} 
      />
      <button 
        className="wave" 
        style={{top: '70.5%',  left: '15.25%'}} 
        onClick={coldButton}
        aria-label="Atidaryti prevencinę informaciją apie vandens tiekimą"
        tabIndex={-1}
      />
    </>
  );
};