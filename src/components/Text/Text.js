import { bool, node } from 'prop-types';
import React from 'react';
import scss from './Text.module.scss';

const determineStyle = ({ headline, subtitle }) => {
  if (headline) return scss.headline;
  if (subtitle) return scss.subtitle;
  return scss.body;
};

const Text = ({
  body, children, headline, subtitle,
}) => (
  <p className={`${scss.text} ${determineStyle({ body, headline, subtitle })}`}>
    {children}
  </p>
);

Text.propTypes = {
  body: bool,
  children: node,
  headline: bool,
  subtitle: bool,
};

Text.defaultProps = {
  body: false,
  children: undefined,
  headline: false,
  subtitle: false,
};

export default Text;
