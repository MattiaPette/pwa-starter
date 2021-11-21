import React, { VoidFunctionComponent } from 'react';
import ServiceWorkerProvider from '../providers/ServiceWorkerProvider';
import Router from './Router';

// All global providers will go here
const App: VoidFunctionComponent = () => {
  return (
    <>
      <ServiceWorkerProvider>
        <Router />
      </ServiceWorkerProvider>
    </>
  );
};

export default App;
