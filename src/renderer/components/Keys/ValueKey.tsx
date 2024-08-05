import React from 'react';
import { useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';

export interface ValueButtonProps {
  value: number;
}

function ValueKey({ value }: ValueButtonProps) {
  const { applyNumber } = useKeys();
  return (
    <KeyButton
      label={value.toString()}
      category={KeyButtonCategory.Operand}
      onClick={() => applyNumber(value)}
    />
  );
}

export default React.memo(ValueKey);
