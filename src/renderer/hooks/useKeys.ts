import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorStateProvider';
import { Operator } from '../utils';

function useKeys() {
  const state = useContext(CalculatorContext);
  if (state === null) {
    throw new Error(
      'useDisplay must be called within a CalculatorStateProvider',
    );
  }
  return {
    applyNumber: (key: number) => {
      state.appendKey(key);
    },
    applyDecimal: () => state.appendKey('.'),
    applyOperator: (operator: Operator) => state.applyOperator(operator),
    toggleNegative: state.toggleNegative,
    clear: state.clear,
    isDirty: state.isDirty,
  };
}

export default useKeys;
