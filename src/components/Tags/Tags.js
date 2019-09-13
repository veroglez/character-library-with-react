import { arrayOf, func, string } from 'prop-types';
import React, { PureComponent } from 'react';
import scss from './Tags.module.scss';

class Tags extends PureComponent {
  static propTypes = {
    onFilter: func,
    tags: arrayOf(string).isRequired,
  };

  static defaultProps = {
    onFilter: undefined,
  }

  render() {
    const { props: { onFilter, tags } } = this;
    const service = 'character?species=';

    return (
      <div>
        {tags.map((tag, index) => (
          <div key={index.toString()} onClick={() => onFilter(`${service}${tag}`)}>{tag}</div> //eslint-disable-line
        ))}
      </div>
    );
  }
}

export default Tags;
