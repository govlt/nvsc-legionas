import React from 'react';
import '../styles/OptionValuesButton.css';

interface OptionValueButtonProps {
    text: string;
    property: string;
    optValue1: string;
    optValue2: string;
    setProperty: React.Dispatch<React.SetStateAction<string>>;
    disableOptValue1?: boolean;
}

export const OptionValuesButtons: React.FC<OptionValueButtonProps> = ({
  text,
  property,
  optValue1,
  optValue2,
  setProperty,
  disableOptValue1 = false,
}) => {

  const handleValueChange = (newValue: string) => {
    if (!disableOptValue1 || newValue !== optValue1) {
      setProperty(newValue);
    }
  };

  return(
    <div className="switch-field">
      {text}
      <span 
        className={`option ${property === optValue1 ? 'selected' : ''} ${disableOptValue1 ? 'disabled' : ''}`}
        onClick={() => handleValueChange(optValue1)}>
        {optValue1}
      </span>
      <span 
        className={`option ${property === optValue2 ? 'selected' : ''}`} 
        onClick={() => handleValueChange(optValue2)}>
        {optValue2}
      </span>
    </div>
  );
};
