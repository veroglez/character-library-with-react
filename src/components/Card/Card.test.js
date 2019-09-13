import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';
import { ProviderData } from '../../common/context/context';

Enzyme.configure({ adapter: new Adapter() });

const IMAGE = 'image.png';
const LINK = 'link';
const TITLE = 'Lorem';
const SUBTITLE = 'Ipsum';

const HOC = inherit => (
  <ProviderData favourites={[1, 2]}>
    <Card {...inherit} />
  </ProviderData>
);

describe('<Card>', () => {
  it('renders when {link and image}', () => {
    const wrapper = shallow(<MemoryRouter><HOC link={LINK} image={IMAGE} /></MemoryRouter>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders when {title}', () => {
    const wrapper = shallow(<MemoryRouter><HOC link={LINK} title={TITLE} image={IMAGE} /></MemoryRouter>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders when {subtitle}', () => {
    const wrapper = shallow(<MemoryRouter><HOC link={LINK} subtitle={SUBTITLE} image={IMAGE} /></MemoryRouter>);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
