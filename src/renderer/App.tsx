import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CalculatorStateProvider from './context/CalculatorStateProvider';
import Display from './components/Display/DisplayContainer';
import Keys from './components/Keys/KeysContainer';

function Calculator() {
  return (
    <>
      <div className="sub-container display-container">
        <Display />
      </div>
      <div className="sub-container keys-container">
        <Keys />
      </div>
    </>
  );
}

export default function App() {
  return (
    <CalculatorStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </Router>
    </CalculatorStateProvider>
  );
}
