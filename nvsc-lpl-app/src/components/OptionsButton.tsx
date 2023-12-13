import React, { useEffect } from 'react';
import { OptionValuesButtons } from './OptionValuesButton';
import HouseSVG from '../assets/daugiabutis_ikona.svg';
import ColdWaterSVG from '../assets/melynas_ciaupas_ikona.svg';
import HotWaterSVG from '../assets/raudonas_ciaupas_ikona.svg';

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

  useEffect(() => {
    if (residenceType === 'Individualiame name' && hotWaterSource === 'Centralizuotai') {
      setHotWaterSource('Individualiai');
    }
  }, [residenceType, hotWaterSource, setHotWaterSource]);

  return(
    <>
      <div>
        <OptionValuesButtons
          text="Gyvenu"
          property={residenceType}
          optValue1="Daugiabutyje"
          optValue2="Individualiame name"
          setProperty={setResidenceType}
          svg={HouseSVG}
        />
        <OptionValuesButtons
          text="Karštu vandeniu apsirūpinu"
          property={hotWaterSource}
          optValue1="Centralizuotai"
          optValue2="Individualiai"
          setProperty={setHotWaterSource}
          disableOptValue1={residenceType === 'Individualiame name'}
          svg={HotWaterSVG}
        />
        <OptionValuesButtons
          text="Geriamu vandeniu apsirūpinu"
          property={drinkingWaterSource}
          optValue1="Centralizuotai"
          optValue2="Individualiai"
          setProperty={setDrinkingWaterSource}
          svg={ColdWaterSVG}
        />
      </div>
    </>
  );
};