import { useEffect, useState } from 'react';

const HIDE_BODY_OVERFLOW_CLASS = 'hide-overflow';

export const useModalOverflow = () => {
  const [hideBodyOverflow, setHideBodyOverflow] = useState<boolean>(false);

  useEffect(() => {
    if (hideBodyOverflow) {
      document.body.classList.add(HIDE_BODY_OVERFLOW_CLASS);
    } else {
      document.body.classList.remove(HIDE_BODY_OVERFLOW_CLASS);
    }

    return () => {
      document.body.classList.remove(HIDE_BODY_OVERFLOW_CLASS);
    };
  }, [hideBodyOverflow]);

  return {
    setHideBodyOverflow
  };
};
