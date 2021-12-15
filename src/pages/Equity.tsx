/* eslint-disable no-unused-vars */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import BarChart from '../components/BarChart';

const Equity = function () {
  return (
    <div style={{
      minHeight: '20%', width: '48%', height: '48%', margin: '5px',
    }}
    >
      <BarChart />
    </div>
  );
};

export default Equity;
