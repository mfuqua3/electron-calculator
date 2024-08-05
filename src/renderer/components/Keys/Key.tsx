/* eslint-disable react/require-default-props */
import React from 'react';

export enum KeyButtonCategory {
  Operand = 'operand',
  Operator = 'operator',
  Modifier = 'modifier',
  Finalizer = 'finalizer',
}
export interface KeyButtonProps {
  category: KeyButtonCategory;
  label: string;
  onClick: () => void;
  highlighted?: boolean;
}

function Key({ category, label, onClick, highlighted }: KeyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`key-button key-button-${category} ${highlighted ? 'key-button-highlighted' : ''}`}
    >
      {label}
    </button>
  );
}

export default React.memo(Key);
