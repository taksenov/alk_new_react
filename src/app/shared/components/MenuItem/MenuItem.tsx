import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './MenuItem.module.scss';

interface IProps {
  linkTo: string;
  name: string;
}

class MenuItem extends React.PureComponent<IProps> {
  render() {
    const { linkTo, name } = this.props;

    return (
      <div className={styles.wrapper}>
        <img className={styles.image} src={'http://lorempixel.com/24/24'} alt="Icon" />
        <Link to={linkTo}>{name}</Link>
      </div>
    );
  }
}

export default MenuItem;
