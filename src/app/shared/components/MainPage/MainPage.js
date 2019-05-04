import React, { PureComponent } from 'react';
import styles from './MainPage.module.scss';

class MainPage extends PureComponent {
  componentDidMount() {
    const oldLK = document.getElementById('root');
    oldLK.style.display = 'none';
  }

  render() {
    return (
      <div className={styles.container}>
        <p className="t-greeting">
          Это главная страница, она на ReactJS. Начинать нужно с нее, иначе будет не комильфо!
        </p>
      </div>
    );
  }
}

export default MainPage;
