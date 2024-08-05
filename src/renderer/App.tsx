import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import CalculatorStateProvider from './context/CalculatorStateProvider';
import DisplayContainer from './components/Display/DisplayContainer';
import KeysContainer from './components/Keys/KeysContainer';
import { useDisplay, useKeys } from './hooks';
import { Operator } from './utils';

function Calculator() {
  const { mainDisplay } = useDisplay();
  const keys = useKeys();
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mainDisplay]);
  function handleKeyDown(event: KeyboardEvent) {
    const { code } = event;
    const keyMap: Record<string, () => void> = {
      Delete: () => keys.clear(),
      NumpadEnter: () => keys.applyOperator(Operator.Equals),
      NumpadMultiply: () => keys.applyOperator(Operator.Multiply),
      NumpadDivide: () => keys.applyOperator(Operator.Divide),
      NumpadAdd: () => keys.applyOperator(Operator.Add),
      NumpadSubtract: () => {
        if (keys.isDirty || mainDisplay !== '0') {
          keys.applyOperator(Operator.Subtract);
        } else {
          keys.toggleNegative();
        }
      },
      NumpadDecimal: () => keys.applyDecimal(),
      Numpad0: () => keys.applyNumber(0),
      Numpad1: () => keys.applyNumber(1),
      Numpad2: () => keys.applyNumber(2),
      Numpad3: () => keys.applyNumber(3),
      Numpad4: () => keys.applyNumber(4),
      Numpad5: () => keys.applyNumber(5),
      Numpad6: () => keys.applyNumber(6),
      Numpad7: () => keys.applyNumber(7),
      Numpad8: () => keys.applyNumber(8),
      Numpad9: () => keys.applyNumber(9),
    };
    const fn: () => void | undefined = keyMap[code];
    if (fn) {
      fn();
    }
  }

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
