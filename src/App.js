import React from 'react';
import scss from './App.module.scss';
import { Header, Text } from './components';
import assets from './assets';
import l10n from './common/l10n';


function App() {
  return (
    <div className="App">
      <Header logo={assets.logo} />
      <div className={scss.container}>
        <Text headline>{l10n.CHARACTERS}</Text>
      </div>
    </div>
  );
}

export default App;
