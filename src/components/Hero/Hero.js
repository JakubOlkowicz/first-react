import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

const HeroComponet = props => (
  HeroComponet.PropTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.node,
  },
  
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image}></img>
  </header>
);
export default HeroComponet;