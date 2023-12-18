import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cases, Case } from '../types/Cases';

export const useCases = () => {
  const [cases, setCases] = useState<Case[]>();
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<Cases>('https://legioneles-atvejai.dekani9422.workers.dev/')
      .then((res) => setCases(res.data['_data']))
      .catch(err => {
        setError(err.message);
      });


  }, []);

  return {cases, error};
};