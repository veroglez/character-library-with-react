import { func, number, shape } from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import scss from './Detail.module.scss';
import { Image, Text } from '..';
import { C } from '../../common';
import onColor from '../../common/modules/onColor';


class Detail extends PureComponent {
  static propTypes = {
    characterId: number.isRequired,
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
      image, name, gender, species, status, origin: { name: origin },
    } = await response.json();
    this.setState({
      image, name, gender, species, status, origin,
    });
    onTitle(name);
  }

  render() {
    const {
      state: {
        image, name, gender, species, status, origin,
      },
      props: { l10n },
    } = this;
    const info = { gender, status, origin };

    return (
      <div className={scss.container}>
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
        </div>
      </div>
    );
  }
}

export default Detail;
