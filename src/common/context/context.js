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
    characters: [],
    l10n: L10N,
  }

  componentDidMount() {
    this.setState({ busy: false });

    const services = ['character'];
    const dataStorage = services.map(async (service) => {
      const response = await fetch(`${C.DOMAIN}/${service}`);
      return response.json();
    });

    Promise.all(dataStorage).then((data) => {
      const [character] = data;
      this.setState({ characters: character.results });
    });
  }

  onData = object => this.setState(object);

  render() {
    const {
      onData, props: { children },
    } = this;

    return (
      <Provider value={{ ...this.state, onData }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerData, ProviderData };
