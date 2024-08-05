export type ValueKey = number | '.';
export enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = 'X',
  Divide = '/',
  Equals = '=',
}
export enum ErrorCodes {
  DivideByZero = 'UNDEF',
  Overflow = 'OVERFLOW',
}
