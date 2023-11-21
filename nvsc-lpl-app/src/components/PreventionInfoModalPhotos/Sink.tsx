import React from 'react';
import sink from '../../assets/kriaukle_back.svg';

export const Sink: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={sink} alt="Kriauklė" className="modalImage"/>
      </div>
    </>
  );
};