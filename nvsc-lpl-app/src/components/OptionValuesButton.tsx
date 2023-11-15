import React, { useEffect, useRef } from 'react';
import '../styles/OptionValuesButton.css';

interface OptionValueButtonProps {
    property: string;
    optValue1: string;
    optValue2: string;
    setProperty: React.Dispatch<React.SetStateAction<string>>;
    disableOptValue1?: boolean;
    onClose: () => void;
    optionsRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const OptionValuesButtons: React.FC<OptionValueButtonProps> = ({
  property,
  optValue1,
  optValue2,
  setProperty,
  disableOptValue1 = false,
  onClose,
  optionsRef
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node) && !optionsRef.current?.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsRef, onClose]);

  const handleValueChange = (newValue: string) => {
    if (!disableOptValue1 || newValue !== optValue1) {
      setProperty(newValue);
    }
  };

  return(
    <div className="switch-field" ref={wrapperRef}>
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
      <span className="close" onClick={onClose}>&times;</span>
    </div>
  );
};
