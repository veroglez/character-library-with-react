import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

const IMAGE = 'image.png';

describe('<Header>', () => {
  it('renders', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {logo}', () => {
    const tree = renderer.create(<Header logo={IMAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
