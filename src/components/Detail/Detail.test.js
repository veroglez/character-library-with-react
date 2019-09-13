import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { L10N } from '../../common';

const CHARACTER_ID = 1;
const FUNC = () => {};

describe('<Detail>', () => {
  it('renders when {characterId} and {l10n}', () => {
    const tree = renderer.create(<Detail characterId={CHARACTER_ID} l10n={L10N} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when {onTitle}', () => {
    const tree = renderer.create(<Detail characterId={CHARACTER_ID} l10n={L10N} onTitle={FUNC} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
