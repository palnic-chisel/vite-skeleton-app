import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/index';
import { LicenseManager } from '@ag-grid-enterprise/all-modules';

LicenseManager.setLicenseKey('CompanyName=QBS Software Ltd_on_behalf_of_GATElab srl,LicensedGroup=Gatelab developers,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=5,LicensedProductionInstancesCount=1,AssetReference=AG-015811,ExpiryDate=21_July_2022_[v2]_MTY1ODM1ODAwMDAwMA==22dfa7530f70c878970fe0eefb1d06ed');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </ Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
