import React from 'react';
import renderer from 'react-test-renderer';

import Tags from './Tags';

const TAGS = ['alive', 'death'];
const FUNC = () => {};

describe('<Tags>', () => {
  it('renders when {tags}', () => {
    const tree = renderer.create(<Tags tags={TAGS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onFilter}', () => {
    const tree = renderer.create(<Tags tags={TAGS} onFilter={FUNC} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
