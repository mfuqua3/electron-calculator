import { ValueKey } from './types';

export default function (key: ValueKey): key is '.' {
  return typeof key === 'string' && key === '.';
}
