import { arrayOf, shape } from 'prop-types';
import React from 'react';
import scss from './CardList.module.scss';
import { Card } from '..';

const CardList = ({ characters }) => (
  <div className={scss.container}>
    <div className={scss.characters}>
      {characters.map(character => (
        <Card
          key={character.id}
          image={character.image}
          id={character.id}
          title={character.name}
          subtitle={character.species}
          link={`/${character.id}`}
        />
      ))}
    </div>
  </div>
);

CardList.propTypes = {
  characters: arrayOf(shape({})),
};

CardList.defaultProps = {
  characters: undefined,
};

export default CardList;
