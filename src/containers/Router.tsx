import React, { VoidFunctionComponent } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Settings from './Settings';

const Router: VoidFunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
