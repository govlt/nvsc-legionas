import { useEffect, useState } from 'react';
//import axios from 'axios';
// import { Cases, Case } from '../types/Cases';
import { Case } from '../types/Cases';
import localCases from '../data.json'; 


export const useCases = () => {
  const [cases, setCases] = useState<Case[]>();
  const [error, setError] = useState('');

  useEffect(() => {
    //endpoint implementation
    // axios
    //   .get<Cases>('https://legioneles-atvejai.dekani9422.workers.dev/')
    //   .then((res) => setCases(res.data['_data']))
    //   .catch(err => {
    //     setError(err.message);
    //   });
    try {
      // Assuming your JSON structure is similar to what you were fetching from the API
      setCases((localCases['_data'] as Case[]));
    } catch (err) {
      setError('Error loading cases');
    }

  }, []);

  return {cases, error};
};