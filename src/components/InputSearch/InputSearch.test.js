import React from 'react';
import renderer from 'react-test-renderer';
import InputSearch from './InputSearch';
import { ProviderData } from '../../common/context/context';

const HOC = inherit => (
  <ProviderData l10n={{ SEARCH: 'Search' }}>
    <InputSearch {...inherit} />
  </ProviderData>
);

describe('<InputSearch>', () => {
  it('renders', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
