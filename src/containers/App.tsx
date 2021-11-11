import React, { VoidFunctionComponent } from 'react';
import ReloadPrompt from '../components/ReloadPrompt';
import Router from './Router';

// All global providers will go here
const App: VoidFunctionComponent = () => {
  return (
    <>
      <ReloadPrompt />
      <Router />
    </>
  );
};

export default App;
