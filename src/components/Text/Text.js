import { bool, node, string } from 'prop-types';
import React from 'react';
import scss from './Text.module.scss';

const determineStyle = ({
  caption, headline, subtitle,
}) => {
  if (headline) return scss.headline;
  if (subtitle) return scss.subtitle;
  if (caption) return scss.caption;
  return scss.body;
};

const Text = ({
  caption, children, headline, subtitle, color, ...inherit
}) => (
  <p className={`${scss.text} ${determineStyle({ caption, headline, subtitle })}${inherit.styles ? ` ${inherit.styles}` : ''}${color ? ` ${scss[color]}` : ''}`}>
    {children}
  </p>
);

Text.propTypes = {
  caption: bool,
  color: string,
  children: node,
  headline: bool,
  subtitle: bool,
};

Text.defaultProps = {
  caption: false,
  color: undefined,
  children: undefined,
  headline: false,
  subtitle: false,
};

export default Text;
