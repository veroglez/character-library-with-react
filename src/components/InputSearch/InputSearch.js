import React, { PureComponent, Fragment } from 'react';
import scss from './InputSearch.module.scss';
import { ConsumerData } from '../../common/context/context';

class InputSearch extends PureComponent {
  state = {
    value: '',
    busy: true,
    characters: [],
  }

  onState = ({ characters }) => this.setState({ busy: false, characters });

  onChange = (event, { onData }) => {
    const { characters } = this.state;
    this.setState({ value: event.target.value });

    const charactersFiltered = characters.filter(character => (
      character.name.toLowerCase().includes(event.target.value)
    ));

    onData({ characters: charactersFiltered });
  }

  render() {
    const { onChange, onState, state: { busy, value } } = this;

    return (
      <ConsumerData>
        {context => (
          <Fragment>
            {busy && context.characters.length > 0 && onState(context)}
            <input
              className={scss.input}
              placeholder={context.l10n.SEARCH}
              type="text"
              value={value}
              name="name"
              onChange={event => onChange(event, context)}
            />
          </Fragment>
        )}
      </ConsumerData>
    );
  }
}

export default InputSearch;
