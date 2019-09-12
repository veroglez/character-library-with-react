import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

const TEXT = 'Lorem ipsum';
const COLOR = 'green';

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

  it('when {color}', () => {
    const tree = renderer.create(<Text color={COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Text>{TEXT}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {inherit}', () => {
    const tree = renderer.create(<Text styles="style">{TEXT}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
