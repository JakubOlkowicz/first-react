/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component{
    static defaultProps = {
      title: PropTypes.node.isRequired,
    }
    render(){
      return (
        <section className={styles.component}>
          <h3>{this.props.title}</h3>
        </section>
      );
    }
}

export default Card;
