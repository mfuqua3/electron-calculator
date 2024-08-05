import React from 'react';
import { Operator } from '../../utils';
import { useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';

export interface OperatorButtonProps {
  operator: Exclude<Operator, Operator.Equals>;
}
function OperatorKey({ operator }: OperatorButtonProps) {
  const { applyOperator } = useKeys();
  return (
    <KeyButton
      onClick={() => applyOperator(operator)}
      category={KeyButtonCategory.Operator}
      label={operator}
    />
  );
}

export default React.memo(OperatorKey);
