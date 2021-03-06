import React from 'react';
import {
  bool, object, oneOfType, string,
} from 'prop-types';
import scss from './Image.module.scss';

const Image = ({ image, icon, ...inherit }) => (
  <div
    className={`${icon ? scss.icon : scss.image}${inherit.styles ? ` ${inherit.styles}` : ''}`}
    style={{ backgroundImage: `url(${image})` }}
  />
);

Image.propTypes = {
  image: oneOfType([object, string]).isRequired,
  icon: bool,
};

Image.defaultProps = {
  icon: null,
};

export default Image;
