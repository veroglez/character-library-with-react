import { object, string, oneOfType } from 'prop-types';
import React from 'react';
import { Image } from '..';
import scss from './Header.module.scss';

const Header = ({ logo }) => (
  <header className={scss.header}>
    {logo && <Image styles={scss.logo} image={logo} />}
  </header>
);

Header.propTypes = {
  logo: oneOfType([object, string]),
};

Header.defaultProps = {
  logo: null,
};

export default Header;
