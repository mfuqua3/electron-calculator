import React from 'react';
import { Operator } from '../../utils';
import { useDisplay, useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';

export interface OperatorButtonProps {
  operator: Exclude<Operator, Operator.Equals>;
}
function OperatorKey({ operator }: OperatorButtonProps) {
  const { applyOperator } = useKeys();
  const { pendingOperator } = useDisplay();
  return (
    <KeyButton
      onClick={() => applyOperator(operator)}
      category={KeyButtonCategory.Operator}
      highlighted={operator === pendingOperator}
      label={operator}
    />
  );
}

export default React.memo(OperatorKey);
