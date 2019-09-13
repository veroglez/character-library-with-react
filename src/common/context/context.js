import { node } from 'prop-types';
import React, { createContext, Component } from 'react';
import { C, L10N } from '..';

const Context = createContext();
const { Provider, Consumer: ConsumerData } = Context;

class ProviderData extends Component {
  static propTypes = {
    children: node,
  };

  static defaultProps = {
    children: undefined,
  };

  state = {
    next: '',
    characters: [],
    l10n: L10N,
  }

  componentDidMount() {
    const service = 'character';
    this.onFetch(service);
  }

  onFetch = async (service, next) => {
    const { characters } = this.state;
    const response = await fetch(next || `${C.DOMAIN}${service}`);
    const character = await response.json();
    this.setState({ characters: next ? [...characters, ...character.results] : character.results, next: character.info.next });
  }

  onData = object => this.setState(object);

  render() {
    const {
      onData, onFetch, props: { children },
    } = this;

    return (
      <Provider value={{ ...this.state, onData, onFetch }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerData, ProviderData };
