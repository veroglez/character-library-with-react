import React from 'react';
import renderer from 'react-test-renderer';

import Image from './Image';

const IMAGE = 'image.png';
const STYLES = 'styles';

describe('<Image>', () => {
  it('renders when {image}', () => {
    const tree = renderer.create(<Image image={IMAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<Image icon image={IMAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {inherit}', () => {
    const tree = renderer.create(<Image icon image={IMAGE} styles={STYLES} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
