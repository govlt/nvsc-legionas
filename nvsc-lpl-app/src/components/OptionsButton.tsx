import React, { useEffect, useState, useRef } from 'react';
import { OptionValuesButtons } from './OptionValuesButton';
import apartmentIcon from '../assets/daugiabutis_ikona.svg';
import blueTapIcon from '../assets/melynas_ciaupas_ikona.svg';
import redTapIcon from '../assets/raudonias_ciaupas_ikona.svg';

interface OptionsButtonProps {
    residenceType: string;
    setResidenceType: React.Dispatch<React.SetStateAction<string>>;
    drinkingWaterSource: string;
    setDrinkingWaterSource: React.Dispatch<React.SetStateAction<string>>;
    hotWaterSource: string;
    setHotWaterSource: React.Dispatch<React.SetStateAction<string>>;
  }

export const OptionsButton: React.FC<OptionsButtonProps> = ({
  residenceType, 
  setResidenceType, 
  drinkingWaterSource, 
  setDrinkingWaterSource, 
  hotWaterSource,
  setHotWaterSource,
}) => {
  const [showOptionsResidence, setShowOptionsResidence] = useState(false);
  const [showOptionsDrinkingWater, setShowOptionsDrinkingWater] = useState(false);
  const [showOptionsHotWater, setShowOptionsHotWater] = useState(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (residenceType === 'Individualiame name' && hotWaterSource === 'Centralizuotai') {
      setHotWaterSource('Individualiai');
    }
  }, [residenceType, hotWaterSource, setHotWaterSource]);

  const handleOptionResidenceClick = () => {
    setShowOptionsResidence(true);
    setShowOptionsDrinkingWater(false);
    setShowOptionsHotWater(false);

  };

  const handleCloseOptionResidence = () => {
    setShowOptionsResidence(false);
  };

  const handleOptionDrinkingWaterClick = () => {
    setShowOptionsDrinkingWater(true);
    setShowOptionsResidence(false);
    setShowOptionsHotWater(false);
  };

  const handleCloseOptionDrinkingWater = () => {
    setShowOptionsDrinkingWater(false);
  };

  const handleOptionHotWaterClick = () => {
    setShowOptionsHotWater(true);
    setShowOptionsResidence(false);
    setShowOptionsDrinkingWater(false);
  };

  const handleCloseOptionHotWater = () => {
    setShowOptionsHotWater(false);
  };

  return(
    <>
      <div>
        { showOptionsResidence &&
        <OptionValuesButtons
          property={residenceType}
          optValue1="Daugiabutyje"
          optValue2="Individualiame name"
          setProperty={setResidenceType}
          onClose={handleCloseOptionResidence}
          optionsRef={optionsRef}
        />
        }
        { showOptionsDrinkingWater &&
        <OptionValuesButtons
          property={drinkingWaterSource}
          optValue1="Centralizuotai"
          optValue2="Individualiai"
          setProperty={setDrinkingWaterSource}
          onClose={handleCloseOptionDrinkingWater}
          optionsRef={optionsRef}
        />
        }
        { showOptionsHotWater &&
        <OptionValuesButtons
          property={hotWaterSource}
          optValue1="Centralizuotai"
          optValue2="Individualiai"
          setProperty={setHotWaterSource}
          disableOptValue1={residenceType === 'Individualiame name'}
          onClose={handleCloseOptionHotWater}
          optionsRef={optionsRef}
        />
        }
        <div className="option-buttons" ref={optionsRef}>
          <div className="option-button" onClick={handleOptionResidenceClick}>
            <div className="icon">
              <img src={apartmentIcon} alt="Icon Description" style={{ width: '24px', height: '24px' }} />
            </div>
            <div className="text">{residenceType}</div>
          </div>
          <div className="option-button" onClick={handleOptionDrinkingWaterClick}>
            <div className="icon">
              <img src={blueTapIcon} alt="Icon Description" style={{ width: '24px', height: '24px' }} />
            </div>
            <div className="text">{drinkingWaterSource}</div>
          </div>
          <div className="option-button" onClick={handleOptionHotWaterClick}>
            <div className="icon">
              <img src={redTapIcon} alt="Icon Description" style={{ width: '24px', height: '24px' }} />
            </div>
            <div className="text">{hotWaterSource}</div>
          </div>
        </div>
      </div>
    </>
  );
};