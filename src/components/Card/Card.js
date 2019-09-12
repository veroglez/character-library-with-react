import { string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import scss from './Card.module.scss';
import { Image, Text } from '..';
import onColor from '../../common/modules/onColor';

class Card extends PureComponent {
  static propTypes = {
    image: string,
    link: string,
    title: string,
    subtitle: string,
  };

  static defaultProps = {
    image: undefined,
    link: undefined,
    title: undefined,
    subtitle: undefined,
  };

  render() {
    const {
      props: {
        image, link, subtitle, title,
      },
    } = this;

    return (
      <Link to={link} className={scss.container}>
        <Image image={image} styles={scss.image} />
        <div className={scss.info}>
          <Text subtitle>{title}</Text>
          <Text caption color={onColor(subtitle)}>{subtitle}</Text>
        </div>
      </Link>
    );
  }
}

export default Card;
