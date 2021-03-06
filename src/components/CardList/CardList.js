import {
  arrayOf, func, shape, string,
} from 'prop-types';
import React, { PureComponent, createRef } from 'react';
import { ConsumerData } from '../../common/context/context';
import { Card, Tags } from '..';
import scss from './CardList.module.scss';

const TAGS = ['Human', 'Humanoid', 'Alien'];

class CardList extends PureComponent {
  static propTypes = {
    characters: arrayOf(shape({})),
    onScroll: func,
    next: string,
    onTitle: func,
  };

  static defaultProps = {
    characters: undefined,
    onScroll: undefined,
    next: undefined,
    onTitle: undefined,
  }

  constructor(props) {
    super(props);
    this.container = createRef();
  }

  componentDidMount() {
    const { onTitle } = this.props;
    window.addEventListener('scroll', this.onScrolling, false);
    onTitle(null);
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
      <ConsumerData>
        {({ onFetch }) => (
          <div ref={this.container} className={scss.container}>
            <Tags characters={characters} onFilter={onFetch} tags={TAGS} />

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
        )}
      </ConsumerData>
    );
  }
}

export default CardList;
