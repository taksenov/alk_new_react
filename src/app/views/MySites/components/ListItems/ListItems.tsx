import * as React from 'react';

import styles from './ListItems.module.scss';

interface IProps {
  list: ISiteInfo[];
}

interface ISiteInfo {
  comment: string;
  dateActive: string;
  dateCreate: string;
  dateFinish: string | null;
  dateFirst: string | null;
  host: string;
  id: number;
  phone: string;
  status: string;
}

class ListItems extends React.Component<IProps> {
  render() {
    const { list } = this.props;

    return (
      <div className={styles.wrapper}>
        {list.map(item => (
          <div className={styles.item} key={item.id}>
            {item.comment}
          </div>
        ))}
      </div>
    );
  }
}

export default ListItems;
