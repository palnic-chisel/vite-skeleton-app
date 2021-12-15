/* eslint-disable no-unused-vars */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Grid from '@mui/material/Grid';
import BarChart from '../components/BarChart';

type Props = {
  visible: boolean,
  columns: number,
}

const Credit = ({ visible, columns }: Props) => (
  <Grid
    item
    xs={columns}
    sx={{
      visibility: visible ? 'visible' : 'hidden',
      opacity: visible ? 1 : 0,
      transition: ' visibility 900ms ease-in 900ms, opacity 900ms',
      height: visible ? '100%' : 0,
      width: visible ? '100%' : 0,
      position: visible ? 'relative' : 'absolute',
    }}
  >
    <BarChart />
  </Grid>
);

export default Credit;
