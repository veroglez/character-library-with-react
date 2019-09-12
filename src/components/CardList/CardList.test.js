import React from 'react';
import renderer from 'react-test-renderer';

import CardList from './CardList';

const CHARACTERS = [
  {
    id: 1, image: 'image.png', name: 'Ricky', species: 'Human',
  },
  {
    id: 2, image: 'image.png', name: 'Morty', species: 'Alien',
  },
];

describe('<CardList>', () => {
  it('renders when {characters}', () => {
    const tree = renderer.create(<CardList characters={CHARACTERS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
