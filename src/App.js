import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import scss from './App.module.scss';
import {
  CardList, Detail, Header, Text,
} from './components';
import assets from './assets';
import { C, L10N } from './common';

class App extends PureComponent {
  state = {
    characters: [],
    characterName: undefined,
  };

  async componentDidMount() {
    const services = ['character'];
    const dataStorage = services.map(async (service) => {
      const response = await fetch(`${C.DOMAIN}/${service}`);
      return response.json();
    });

    Promise.all(dataStorage).then((data) => {
      const [character] = data;
      this.setState({ characters: character.results });
    }).catch((error) => console.log(error));
  }

  onTitle = characterName => this.setState({ characterName });

  render() {
    const {
      onTitle, state: { characters, characterName },
    } = this;

    return (
      <Fragment>
        <Header logo={assets.logo} />
        <div className={scss.title}>
          <Text headline styles={scss.text}>{L10N.CHARACTERS}</Text>
          {characterName && <Text headline styles={scss.characterName}>{`> ${characterName}`}</Text>}
        </div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <CardList characters={characters} l10n={L10N} />}
            />
            <Route
              path="/:id"
              render={({ match }) => (
                <Detail characterId={match.params.id} l10n={L10N} onTitle={onTitle} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;