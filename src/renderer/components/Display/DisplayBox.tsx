import React from 'react';
import './display.css';

const displayMap: Record<string, number[][]> = {
  '0': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  '1': [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  '2': [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  '3': [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  '4': [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  '5': [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  '6': [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  '7': [
    [1, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 0],
  ],
  '8': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  '9': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  '.': [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ],
  '-': [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  E: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  R: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
};

export interface DisplayBoxProps {
  value: string | undefined;
}

function DisplayBox({ value }: DisplayBoxProps) {
  const illuminatedClass = (x: number, y: number) => {
    if (!value || !displayMap[value]) {
      return '';
    }
    const displayConfig = displayMap[value];
    return displayConfig[y][x] === 1 ? 'illuminated' : '';
  };
  return (
    <div className="display-box">
      <div className="display-box-container display-box-0">
        <div className={`short-width diamond ${illuminatedClass(0, 0)}`} />
        <div
          className={`long-width horizontal-bar ${illuminatedClass(1, 0)}`}
        />
        <div className={`short-width diamond ${illuminatedClass(2, 0)}`} />
      </div>
      <div className="display-box-container display-box-1">
        <div className={`short-width vertical-bar ${illuminatedClass(0, 1)}`} />
        <div className={`long-width ${illuminatedClass(1, 1)}`} />
        <div className={`short-width vertical-bar ${illuminatedClass(2, 1)}`} />
      </div>
      <div className="display-box-container display-box-2">
        <div className={`short-width diamond ${illuminatedClass(0, 2)}`} />
        <div
          className={`long-width horizontal-bar ${illuminatedClass(1, 2)}`}
        />
        <div className={`short-width diamond ${illuminatedClass(2, 2)}`} />
      </div>
      <div className="display-box-container display-box-3">
        <div className={`short-width vertical-bar ${illuminatedClass(0, 3)}`} />
        <div className={`long-width ${illuminatedClass(1, 3)}`} />
        <div className={`short-width vertical-bar ${illuminatedClass(2, 3)}`} />
      </div>
      <div className="display-box-container display-box-4">
        <div className={`short-width diamond ${illuminatedClass(0, 4)}`} />
        <div
          className={`long-width horizontal-bar ${illuminatedClass(1, 4)}`}
        />
        <div className={`short-width diamond ${illuminatedClass(2, 4)}`} />
      </div>
    </div>
  );
}

export default React.memo(DisplayBox);
