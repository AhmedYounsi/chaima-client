/* eslint-disable */
import React from 'react';
import Departement from './Departement/DepartementSettings';
import WorkPlaces from './WorkPlaces/WorkPlaces';
import Contract from './Contract/ContractType';

function GeneralSettings() {
  return (
    <div className="sections-vertical">
      <WorkPlaces />

      <Departement />
      <Contract />
    </div>
  );
}

export default GeneralSettings;
