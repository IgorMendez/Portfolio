import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CmiProvider from './context/cmiProvider';
import MainPage from './pages/mainPage';
import Curriculo from './pages/curriculo';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <CmiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/curriculo" element={<Curriculo />} />
        </Routes>
      </BrowserRouter>
    </CmiProvider>
  );
}

export default App;
