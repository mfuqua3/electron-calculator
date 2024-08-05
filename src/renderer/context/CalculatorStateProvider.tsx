/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode, useState } from 'react';
import { raw } from 'concurrently/dist/src/defaults';
import {
  ErrorCodes,
  executeOperation,
  isDecimal,
  MaxDisplayLength,
  MinimumPrecision,
  Operator,
  ValueKey,
} from '../utils';

export interface CalculatorState {
  display: string;
  hasError: boolean;
  negative: boolean;
  isDirty: boolean;
  pendingOperator: Operator | null;
  appendKey: (key: ValueKey) => boolean;
  applyOperator: (operator: Operator) => void;
  toggleNegative: () => void;
  clear: () => void;
}

export const CalculatorContext = createContext<CalculatorState | null>(null);

function CalculatorStateProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [error, setError] = useState<ErrorCodes | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [negative, setNegative] = useState(false);
  const [display, setDisplay] = useState('0');
  const [pendingOperator, setPendingOperator] = useState<Operator | null>(null);
  const [value, setValue] = useState(0);

  function clear() {
    setError(null);
    setPendingOperator(null);
    setDisplay('0');
    setValue(0);
    setIsDirty(false);
  }

  function validateLength(toValidate: string) {
    const maxLength = toValidate.includes('.')
      ? MaxDisplayLength + 1
      : MaxDisplayLength;
    return toValidate.length <= maxLength;
  }
  function appendKey(key: ValueKey): boolean {
    if (error) {
      clear();
    }
    if (isDecimal(key)) {
      if (display.includes('.')) {
        return false;
      }
    }
    const newValue = isDirty ? `${display}${key.toString()}` : key.toString();
    if (!validateLength(newValue)) {
      return false;
    }
    setDisplay(newValue);
    setIsDirty(true);
    return true;
  }
  function toggleNegative() {
    setNegative((curr) => !curr);
  }
  function resolvePendingOperator() {
    if (pendingOperator === null) {
      setValue(parseFloat(display));
      return value * (negative ? -1 : 1);
    }
    const operands = [value * (negative ? -1 : 1), parseFloat(display)];
    const result = executeOperation(operands, pendingOperator);
    if (Number.isNaN(result)) {
      setError(ErrorCodes.DivideByZero);
    }
    setValue(result);
    return result;
  }
  function format(rawValue: number): string {
    let valueString = parseFloat(
      Number(rawValue).toFixed(MaxDisplayLength),
    ).toString();
    const indexOfDecimal = valueString.indexOf('.');
    const minimumPrecision =
      indexOfDecimal > 0
        ? Math.min(MinimumPrecision, valueString.length - indexOfDecimal)
        : 0;
    if (rawValue / 10 ** minimumPrecision > 10 ** MaxDisplayLength) {
      setError(ErrorCodes.Overflow);
      return valueString;
    }
    while (
      valueString.length >
      MaxDisplayLength + (indexOfDecimal > 0 ? 0 : -1)
    ) {
      valueString = valueString.slice(0, valueString.length - 1);
    }
    return valueString;
  }
  function applyOperator(operator: Operator) {
    if (!isDirty && operator === Operator.Subtract) {
      toggleNegative();
      setDisplay('0');
      return;
    }
    if (isDirty) {
      const resolvedValue = resolvePendingOperator();
      setDisplay(format(resolvedValue));
    }
    if (operator !== Operator.Equals) {
      setPendingOperator(operator);
    } else {
      setPendingOperator(null);
    }
    setIsDirty(false);
    setNegative(false);
  }

  return (
    <CalculatorContext.Provider
      value={{
        display: negative ? `-${display}` : display,
        hasError: error !== null,
        pendingOperator,
        appendKey,
        applyOperator,
        clear,
        isDirty,
        negative,
        toggleNegative,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default React.memo(CalculatorStateProvider);
