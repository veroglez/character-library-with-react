import React, { PureComponent } from 'react';
import scss from './InputSearch.module.scss';
import { ConsumerData } from '../../common/context/context';

class SearchInput extends PureComponent {
  state = {
    value: '',
  }

  onChange = (event, { characters, onData }) => {
    this.setState({ value: event.target.value });

    const charactersFiltered = characters.filter(character => (
      character.name.toLowerCase().includes(event.target.value)
    ));

    onData({ characters: charactersFiltered });
  }

  render() {
    const { onChange, state: { value } } = this;

    return (
      <ConsumerData>
        {context => (
          <input
            className={scss.input}
            placeholder={'search'}
            type="text"
            value={value}
            name="name"
            onChange={event => onChange(event, context)}
          />
        )}
      </ConsumerData>
    );
  }
}

export default SearchInput;
