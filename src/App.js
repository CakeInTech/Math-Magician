import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import Calculator from './Components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="about" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
