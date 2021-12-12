import { reverseString } from './index';

describe('test reverse string', () => {
  it('test revese string by js method', () => {
    const result = reverseString('reversestring');
    expect(result).toBe('gnirtsesrever');
  });
})