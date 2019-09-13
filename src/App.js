import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConsumerData, ProviderData } from './common/context/context';
import scss from './App.module.scss';
import {
  CardList, Detail, Header, Text, Tags, SearchInput,
} from './components';
import assets from './assets';
import { L10N } from './common';

const TAGS = ['Human', 'Humanoid', 'Alien'];

class App extends PureComponent {
  state = {
    characterName: undefined,
  };

  onTitle = characterName => this.setState({ characterName });


  render() {
    const {
      onTitle, state: { characterName },
    } = this;

    return (
      <ProviderData>
        <ConsumerData>
          {({ characters, next, onFetch }) => (
            <Fragment>
              <Header logo={assets.logo} />
              <div className={scss.header}>
                <div>
                  <Text headline styles={scss.text}>{L10N.CHARACTERS}</Text>
                  {characterName && <Text headline styles={scss.characterName}>{`> ${characterName}`}</Text>}
                </div>
                <SearchInput characters={characters} />
              </div>
              <Tags characters={characters} onFilter={onFetch} tags={TAGS} />
              <BrowserRouter>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <CardList onScroll={onFetch} characters={characters} next={next} l10n={L10N} />}
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
          )}
        </ConsumerData>
      </ProviderData>
    );
  }
}

export default App;
