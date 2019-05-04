import * as React from 'react';

import styles from './styles.module.scss';

const ContentLayout = ({ children }: { children: any }) => <div className={styles.content}>{children}</div>;

export default ContentLayout;
