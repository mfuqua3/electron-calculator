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
}

function Key({ category, label, onClick }: KeyButtonProps) {
  return (
    <button onClick={onClick} className={`key-button key-button-${category}`}>
      {label}
    </button>
  );
}

export default React.memo(Key);
