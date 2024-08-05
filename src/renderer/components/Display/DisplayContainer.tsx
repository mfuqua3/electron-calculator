import React from 'react';
import './display.css';
import DisplayBox from './DisplayBox';

function DisplayContainer() {
  return (
    <div className="display">
      <DisplayBox value="1" />
      <DisplayBox value="2" />
      <DisplayBox value="3" />
      <DisplayBox value="4" />
      <DisplayBox value="5" />
      <DisplayBox value="6" />
      <DisplayBox value="7" />
      <DisplayBox value="8" />
    </div>
  );
}

export default React.memo(DisplayContainer);
