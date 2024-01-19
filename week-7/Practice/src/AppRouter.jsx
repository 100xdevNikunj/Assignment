// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

// Import all QS pages
import QS1 from './pages/QS1';
import QS2 from './pages/QS2';
import QS3 from './pages/QS3';
import QS4 from './pages/QS4';
import QS5 from './pages/QS5';
import QS6 from './pages/QS6';
import QS7 from './pages/QS7';

const qsPages = [QS1, QS2, QS3, QS4, QS5, QS6, QS7];

const AppRouter = () => {
    return (
            <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {qsPages.map((Page, index) => (
              <Route key={index} path={`/QS${index + 1}`} element={<Page />} />
            ))}
          </Routes>
        </Router>
          );
};

export default AppRouter;
