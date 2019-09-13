import {
  arrayOf, func, shape, string,
} from 'prop-types';
import React, { PureComponent, createRef } from 'react';
import scss from './CardList.module.scss';
import { Card } from '..';

class CardList extends PureComponent {
  static propTypes = {
    characters: arrayOf(shape({})),
    onScroll: func,
    next: string,
  };

  static defaultProps = {
    characters: undefined,
    onScroll: undefined,
    next: undefined,
  }

  constructor(props) {
    super(props);
    this.container = createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrolling, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrolling, false);
  }

  onScrolling = () => {
    const { container: { current }, props: { onScroll, next } } = this;
    this.scroll = window.scrollY + window.innerHeight;

    if (this.scroll > current.clientHeight) {
      window.removeEventListener('scroll', this.onScrolling, false);
      onScroll('character', next);
    }
    window.addEventListener('scroll', this.onScrolling, false);
  }

  render() {
    const { characters } = this.props;

    return (
      <div ref={this.container} className={scss.container}>
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
  }
}

export default CardList;
