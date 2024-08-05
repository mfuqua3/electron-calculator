import React from 'react';
import { useKeys } from '../../hooks';
import KeyButton, { KeyButtonCategory } from './Key';

function ToggleNegativeKey() {
  const { toggleNegative } = useKeys();
  return (
    <KeyButton
      label="±"
      category={KeyButtonCategory.Modifier}
      onClick={() => toggleNegative()}
    />
  );
}

export default React.memo(ToggleNegativeKey);
