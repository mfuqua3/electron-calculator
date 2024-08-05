import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorStateProvider';

function useDisplay() {
  const state = useContext(CalculatorContext);
  if (state === null) {
    throw new Error(
      'useDisplay must be called within a CalculatorStateProvider',
    );
  }
  return {
    mainDisplay: state.display,
    pendingOperator: state.pendingOperator,
    isNegative: state.negative,
  };
}

export default useDisplay;
