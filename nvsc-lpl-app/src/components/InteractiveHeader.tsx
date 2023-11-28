import React from 'react';

interface InteractiveHeaderProps {
  header: string;
  text1: string;
  text2?: string;
  textWithLink?: React.ReactNode;
}

const InteractiveHeader: React.FC<InteractiveHeaderProps> = ({
  header,
  text1,
  text2,
  textWithLink
}) => {

  return(
    <>
      <div className="interactiveTextContainer">
        <h3 className="interactiveHeader">
          {header}
        </h3>
        <p className="interactiveText">
          {text1}
        </p>
        <p className="interactiveText">
          {textWithLink ? textWithLink : text2}
        </p>
      </div>
    </>
  );
};

export default InteractiveHeader;