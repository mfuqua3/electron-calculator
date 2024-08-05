import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CalculatorStateProvider from './context/CalculatorStateProvider';
import DisplayContainer from './components/Display/DisplayContainer';
import KeysContainer from './components/Keys/KeysContainer';

function Calculator() {
  return (
    <>
      <div className="sub-container display-container">
        <DisplayContainer />
      </div>
      <div className="sub-container keys-container">
        <KeysContainer />
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
