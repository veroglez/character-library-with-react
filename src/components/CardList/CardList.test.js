import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardList from './CardList';
import { ProviderData } from '../../common/context/context';

Enzyme.configure({ adapter: new Adapter() });

const CHARACTERS = [
  {
    id: 1, image: 'image.png', name: 'Ricky', species: 'Human',
  },
  {
    id: 2, image: 'image.png', name: 'Morty', species: 'Alien',
  },
];

const HOC = inherit => (
  <ProviderData onFetch={() => {}}>
    <CardList {...inherit} />
  </ProviderData>
);

describe('<CardList>', () => {
  it('renders when {characters}', () => {
    const wrapper = shallow(<MemoryRouter><HOC characters={CHARACTERS} /></MemoryRouter>);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
