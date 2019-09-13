import L10N from './l10n';

const KEYS = ['CHARACTERS', 'GENDER', 'ORIGIN', 'STATUS'];

describe('common:l10n', () => {
  it('keys', () => {
    expect(Object.keys(L10N)).toEqual(KEYS);
  });
});
