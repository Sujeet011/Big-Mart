import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import InfiniteScrollComponent from './InfiniteScrollComponent';
import SignupForm from './SignupForm'; 
import MemoExample from './MemoExample';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/memo" element={<MemoExample />} />
          <Route path="/" element={<InfiniteScrollComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
