import { arrayOf, func, string } from 'prop-types';
import React, { PureComponent } from 'react';
import scss from './Tags.module.scss';
import { Text } from '..';

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
      <div className={scss.container}>
        {tags.map((tag, index) => (
          // eslint-disable-next-line
          <div className={scss.tag} key={index.toString()} onClick={() => onFilter(`${service}${tag}`)}> 
            <Text>{tag}</Text>
          </div>
        ))}
      </div>
    );
  }
}

export default Tags;
