/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from './components/Layout';
import theme from './assets/theme/theme';
import darkTheme from './assets/theme/darkTheme';
import Equity from './pages/Equity';
import { actionCreators } from './state';
import { RootState } from './state/reducers';
import SamplePageTwo from './pages/SamplePageTwo';
import SamplePageOne from './pages/SamplePageOne';
import SamplePageThree from './pages/SamplePageThree';
import ErrorPage from './pages/ErrorPage';

const App = function () {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  console.log(state, 'state');

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Layout>

          <Routes>
            <Route path="/sample-page-one" element={<SamplePageOne />} />
            <Route path="/sample-page-two" element={<SamplePageTwo />} />
            <Route path="/sample-page-three" element={<SamplePageThree />} />
          </Routes>
        </Layout>

      </Router>
      {/* <Equity /> */}
    </ThemeProvider>
  );
};

export default App;
