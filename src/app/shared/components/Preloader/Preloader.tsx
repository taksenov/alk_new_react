import * as React from 'react';

const cx = require('classnames');
import styles from './Preloader.module.scss';

interface IProps {
  size: number;
}

/**
 * Preloader for all processes
 *
 * props:
 * size: number = values of [1,2,3,4,5,6,7,8,9,10]
 * default value = 10
 */
export default class Preloader extends React.PureComponent<IProps> {
  public render() {
    const { size } = this.props;

    return (
      <div
        className={cx(styles.preloader, {
          [styles.preloader__1x]: size === 1,
          [styles.preloader__2x]: size === 2,
          [styles.preloader__3x]: size === 3,
          [styles.preloader__4x]: size === 4,
          [styles.preloader__5x]: size === 5,
          [styles.preloader__6x]: size === 6,
          [styles.preloader__7x]: size === 7,
          [styles.preloader__8x]: size === 8,
          [styles.preloader__9x]: size === 9,
        })}
      >
        <div className={cx(styles.loader)} />
      </div>
    );
  }
}
