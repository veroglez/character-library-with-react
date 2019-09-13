import C from './constants';

const KEYS = ['DOMAIN', 'DOMAIN_CHARACTER'];

describe('common:constants', () => {
  it('languages', () => {
    expect(Object.keys(C)).toEqual(KEYS);
  });
});
