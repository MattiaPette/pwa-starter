import React, { useEffect, useState, VoidFunctionComponent } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useServiceWorker } from '../providers/ServiceWorkerProvider';

import Homepage from './Homepage';
import Settings from './Settings';

const Router: VoidFunctionComponent = () => {
  const { updateReady, update } = useServiceWorker();

  const [isUpdating, setIsUpdating] = useState(false);
  const [showUpdateNotification, setShowUpdateNotification] =
    useState(updateReady);

  const handleUpdate = () => {
    setIsUpdating(true);
    update();
  };

  useEffect(() => {
    setShowUpdateNotification(updateReady);
  }, [updateReady]);

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
