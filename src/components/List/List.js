import React from 'react';
import styles from './List.scss';
import HeroComponet from '../Hero/Hero';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <HeroComponet />
      </section>
    )
  }
}

export default List;
