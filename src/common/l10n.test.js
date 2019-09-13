import L10N from './l10n';

const KEYS = ['ADD', 'CHARACTERS', 'GENDER', 'ORIGIN', 'SEARCH', 'STATUS'];

describe('common:l10n', () => {
  it('keys', () => {
    expect(Object.keys(L10N)).toEqual(KEYS);
  });
});
