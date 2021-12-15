/* eslint-disable no-nested-ternary */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Equity from './Equity';
import Credit from './Credit';

const SamplePageOne = () => {
  const [chartOneOpen, setCharOneOpen] = useState(true);
  const [chartTwoOpen, setCharTwoOpen] = useState(true);

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', action: () => setCharOneOpen(!chartOneOpen) },
    { icon: <SaveIcon />, name: 'Save', action: () => setCharTwoOpen(!chartTwoOpen) },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  return (
    <>
      <div style={{ color: 'black', fontSize: '20px', height: '5%' }}>Test Change</div>
      <Grid container sx={{ height: '95%' }}>
        <Credit visible={chartTwoOpen} columns={!chartTwoOpen ? 0 : chartOneOpen ? 6 : 12} />
        <Equity visible={chartOneOpen} columns={!chartOneOpen ? 0 : chartTwoOpen ? 6 : 12} />
      </Grid>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
      <div />
    </>
  );
};

export default SamplePageOne;
