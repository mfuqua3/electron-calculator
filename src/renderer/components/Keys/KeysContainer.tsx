import React from 'react';
import './keys.css';
import ValueKey from './ValueKey';
import OperatorKey from './OperatorKey';
import { Operator } from '../../utils';
import ClearKey from './ClearKey';
import DecimalKey from './DecimalKey';
import EqualsKey from './EqualsKey';
import ToggleNegativeKey from './ToggleNegativeKey';

function KeysContainer() {
  return (
    <div className="keys-grid">
      <React.Fragment key="row-0">
        <ToggleNegativeKey />
        <div />
        <div />
        <OperatorKey operator={Operator.Divide} />
      </React.Fragment>
      <React.Fragment key="row-1">
        <ValueKey value={7} />
        <ValueKey value={8} />
        <ValueKey value={9} />
        <OperatorKey operator={Operator.Multiply} />
      </React.Fragment>
      <React.Fragment key="row-2">
        <ValueKey value={4} />
        <ValueKey value={5} />
        <ValueKey value={6} />
        <OperatorKey operator={Operator.Subtract} />
      </React.Fragment>
      <React.Fragment key="row-3">
        <ValueKey value={1} />
        <ValueKey value={2} />
        <ValueKey value={3} />
        <OperatorKey operator={Operator.Add} />
      </React.Fragment>
      <React.Fragment key="row-4">
        <ClearKey />
        <ValueKey value={0} />
        <DecimalKey />
        <EqualsKey />
      </React.Fragment>
    </div>
  );
}

export default React.memo(KeysContainer);
