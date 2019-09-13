import { func, string, shape } from 'prop-types';
import React, { PureComponent } from 'react';
import { ConsumerData } from '../../common/context/context';
import scss from './Detail.module.scss';
import { Image, Text } from '..';
import { C } from '../../common';
import onColor from '../../common/modules/onColor';
import assets from '../../assets';


class Detail extends PureComponent {
  static propTypes = {
    characterId: string.isRequired,
    l10n: shape({}).isRequired,
    onTitle: func,
  };

  static defaultProps = {
    onTitle: undefined,
  };

  state = {
    image: '',
    name: undefined,
    gender: undefined,
    species: undefined,
    status: undefined,
    origin: undefined,
  }

  async componentDidMount() {
    const { characterId, onTitle } = this.props;
    const response = await fetch(`${C.DOMAIN_CHARACTER}/${characterId}`);
    const {
      id, image, name, gender, species, status, origin: { name: origin },
    } = await response.json();
    this.setState({
      id, image, name, gender, species, status, origin,
    });
    onTitle(name);
  }

  add = (id, favourites, onData) => {
    let data = [...new Set([...favourites.data, id])];
    onData({ favourites: { data } });
    data = JSON.stringify({ data });
    localStorage.setItem('rnm:favourites', data);
  }

  render() {
    const {
      add,
      state: {
        id, image, name, gender, species, status, origin,
      },
      props: { l10n },
    } = this;
    const info = { gender, status, origin };

    return (
      <ConsumerData>
        {({ favourites, onData }) => (
          <div className={scss.container}>
            {favourites.data.includes(id) && <Image icon image={assets.heart} styles={scss.favourites} />}
            <Image image={image} styles={scss.image} />
            <div className={scss.info}>
              <Text caption color={onColor(species)} styles={scss.caption}>{species}</Text>
              <Text headline>{name}</Text>
              <ul>
                {Object.keys(info).map((key, index) => (
                  <li key={index.toString()} className={scss.list}>
                    <Text styles={`${scss.text} ${scss.bold}`}>{`${l10n[key.toUpperCase()]}:`}</Text>
                    <Text styles={scss.text}>{info[key]}</Text>
                  </li>
                ))}
              </ul>
              <div role="presentation" onClick={() => add(id, favourites, onData)}>
                <Text styles={scss.add}>{l10n.ADD}</Text>
              </div>
            </div>
          </div>
        )}
      </ConsumerData>
    );
  }
}

export default Detail;
