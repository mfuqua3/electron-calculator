import React from 'react';
import { useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';
import { Operator } from '../../utils';

function EqualsKey() {
  const { applyOperator } = useKeys();

  return (
    <KeyButton
      onClick={() => applyOperator(Operator.Equals)}
      category={KeyButtonCategory.Finalizer}
      label="="
    />
  );
}

export default React.memo(EqualsKey);
