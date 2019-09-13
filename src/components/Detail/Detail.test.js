import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { L10N } from '../../common';
import { ProviderData } from '../../common/context/context';

// const fetch = jest.fn(() => Promise.resolve());

const CHARACTER_ID = '1';
const FUNC = () => {};

const HOC = inherit => (
  <ProviderData favourites={[1, 2]} onData={() => {}}>
    <Detail {...inherit} />
  </ProviderData>
);


describe('<Detail>', () => {
  it('renders when {characterId} and {l10n}', async () => {
    const tree = renderer.create(<HOC characterId={CHARACTER_ID} l10n={L10N} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders when {onTitle}', async () => {
    const tree = renderer.create(<HOC characterId={CHARACTER_ID} l10n={L10N} onTitle={FUNC} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
