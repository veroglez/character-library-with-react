import { string, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { ConsumerData } from '../../common/context/context';
import scss from './Card.module.scss';
import { Image, Text } from '..';
import onColor from '../../common/modules/onColor';
import assets from '../../assets';

class Card extends PureComponent {
  static propTypes = {
    id: number,
    image: string.isRequired,
    link: string.isRequired,
    title: string,
    subtitle: string,
  };

  static defaultProps = {
    id: undefined,
    title: undefined,
    subtitle: undefined,
  };

  render() {
    const {
      props: {
        id, image, link, subtitle, title,
      },
    } = this;

    return (
      <ConsumerData>
        {({ favourites }) => (
          <Link to={link} className={scss.container}>
            <Image image={image} styles={scss.image} />
            {favourites.data.includes(id) && <Image icon image={assets.heart} styles={scss.favourite} />}
            <div className={scss.info}>
              <Text subtitle>{title}</Text>
              <Text caption color={onColor(subtitle)}>{subtitle}</Text>
            </div>
          </Link>
        )}
      </ConsumerData>
    );
  }
}

export default Card;
