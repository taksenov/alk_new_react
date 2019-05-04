import * as React from 'react';

import FullPageLayout from '../assets/additional/FullPage';
import ContentLayout from '../assets/additional/Content';

import styles from './ContentPageLayout.module.scss';

export default class ContentPageLayout extends React.Component<any, any> {
  static FullPage = FullPageLayout;
  static Content = ContentLayout;

  render() {
    return <div className={styles.main}>{this.props.children}</div>;
  }
}
