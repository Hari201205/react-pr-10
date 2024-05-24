// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FetchTable from './components/FetchTable';
import AxiosCard from './components/AxiosCard';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">API Calls Example</h1>
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary mr-2">Fetch API Table</Link>
          <Link to="/axios" className="btn btn-secondary">Axios Cards</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<FetchTable />} />
          <Route path="/axios" element={<AxiosCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
