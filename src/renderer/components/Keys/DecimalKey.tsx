import React from 'react';
import { useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';

function DecimalKey() {
  const { applyDecimal } = useKeys();
  return (
    <KeyButton
      label="."
      category={KeyButtonCategory.Modifier}
      onClick={() => applyDecimal()}
    />
  );
}

export default React.memo(DecimalKey);
