import * as React from 'react';

import styles from './styles.module.scss';

const FullPageLayout = ({ children }: { children: any }) => <div className={styles.fullpage}>{children}</div>;

export default FullPageLayout;
