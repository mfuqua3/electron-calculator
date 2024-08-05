/* eslint-disable react/no-array-index-key */
import React from 'react';
import './display.css';
import DisplayBox from './DisplayBox';
import { useDisplay } from '../../hooks';
import { MaxDisplayLength } from '../../utils';

function DisplayContainer() {
  const displayState = useDisplay();
  function getCharacter(index: number): string | undefined {
    if (displayState.hasError) {
      if (index === MaxDisplayLength - 3) {
        return 'E';
      }
      if (index > MaxDisplayLength - 3) {
        return 'R';
      }
      return undefined;
    }
    const firstIndex = MaxDisplayLength - displayState.mainDisplay.length;
    if (index < firstIndex) {
      return undefined;
    }
    return displayState.mainDisplay[index - firstIndex];
  }
  return (
    <div className="display">
      {Array.from(Array(MaxDisplayLength)).map((_, idx) => (
        <DisplayBox key={`display${idx}`} value={getCharacter(idx)} />
      ))}
    </div>
  );
}

export default React.memo(DisplayContainer);
