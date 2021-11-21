import React, { VoidFunctionComponent } from 'react';
import ReloadPrompt from '../components/ReloadPrompt';
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
