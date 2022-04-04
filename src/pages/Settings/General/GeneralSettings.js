/* eslint-disable */
import React from 'react';
import Departement from './Departement/DepartementSettings';
import WorkPlaces from './WorkPlaces/WorkPlaces';

function GeneralSettings() {
  return (
    <div className="sections-vertical">
      <WorkPlaces />

      <Departement />
    </div>
  );
}

export default GeneralSettings;
