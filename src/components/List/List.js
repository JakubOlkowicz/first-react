import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import HeroComponet from '../Hero/Hero';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    imageSrc: PropTypes.node.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <HeroComponet 
          titleText={this.props.title}
          imageSrc={this.props.imageSrc}
       />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'Someting one'}/>
          <Column title={'Someting two'}/>
          <Column title={'Someting three'}/>
        </div>
      </section>
    );
  } 
}

export default List;
