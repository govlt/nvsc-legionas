import React, { useEffect, useState } from 'react';
import { useCases } from '../hooks/UseCases';
import { Case } from '../types/Cases';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

export const Chart: React.FC = () => {
  const { cases } = useCases();
  const [results, setResults] = useState<{ year: number; infections: number; deaths: number }[]>([]);

  useEffect(() => {
    if (cases) {
      const groupedData: { [key: number]: { year: number; infections: number; deaths: number } } = {};

      cases.forEach((item: Case) => {
        const date = new Date(item.pranesimo_menuo);
        const year = date.getFullYear();

        if (!groupedData[year]) {
          groupedData[year] = {
            year,
            infections: 0,
            deaths: 0,
          };
        }

        if (item.mirtis === true) {
          groupedData[year].deaths += item.atvejai;
        }

        groupedData[year].infections += item.atvejai;
      });

      const minYear = Math.min(...Object.keys(groupedData).map(Number));
      const maxYear = Math.max(...Object.keys(groupedData).map(Number));
      const allYears = Array.from({ length: maxYear - minYear + 1 }, (_, index) => minYear + index);

      const filledResults = allYears.map((year) => {
        if (groupedData[year]) {
          return groupedData[year];
        } else {
          return { year, infections: 0, deaths: 0 };
        }
      });

      setResults(filledResults);
    }
  }, [cases]);

  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: 'rgba(72, 99, 160, 1)',
        bodyFont: {
          size: 20,
          family: 'Public Sans',
          weight: 'normal',
          style: 'normal'
        },
        callbacks: {
          title: () => '',
        }
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#4C74F5',
        },
        border: {
          width: 1,
          color: '#4C74F5',
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    }
  };

  const labels = results.map((item) => item.year);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Atvejai',
        borderWidth: 5,
        data: results.map((item) => item.infections),
        tension: 0.3,
        borderColor: '#4C74F5',
        backgroundColor: '#4C74F5',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 10,
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
      },
    ],
  };

  return (
    <>
      {results.length > 0 &&
        <Line
          options={options} 
          data={data} 
        />
      }
    </>
  );
};
