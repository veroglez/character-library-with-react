import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

const TEXT = 'Lorem ipsum';

describe('<Text>', () => {
  it('renders', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {headline}', () => {
    const tree = renderer.create(<Text headline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {subtitle}', () => {
    const tree = renderer.create(<Text subtitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {body}', () => {
    const tree = renderer.create(<Text body />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Text>{TEXT}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});