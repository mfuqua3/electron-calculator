import { Operator } from './types';

export default function (operands: number[], operator: Operator): number {
  if (operands.length !== 2) {
    throw new Error('Must supply two operands');
  }
  switch (operator) {
    case Operator.Add:
      return operands[0] + operands[1];
    case Operator.Subtract:
      return operands[0] - operands[1];
    case Operator.Multiply:
      return operands[0] * operands[1];
    case Operator.Divide:
      return operands[1] === 0 ? Number.NaN : operands[0] / operands[1];
    default:
      throw new Error(`${operator} out of range and cannot be executed`);
  }
}
