import React from 'react';
import { useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';

function ClearKey() {
  const { clear } = useKeys();
  return (
    <KeyButton
      label="C"
      category={KeyButtonCategory.Modifier}
      onClick={() => clear()}
    />
  );
}

export default React.memo(ClearKey);
