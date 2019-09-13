import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardList from './CardList';

Enzyme.configure({ adapter: new Adapter() });

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
    const wrapper = shallow(<MemoryRouter><CardList characters={CHARACTERS} /></MemoryRouter>);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
