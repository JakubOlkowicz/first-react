import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';

const HeroComponet = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.imageSrc}></img>
    </header>
);
HeroComponet.PropTypes = {
    titleText: PropTypes.node.isRequired,
    imageSrc: PropTypes.node.isRequired,
}
export default HeroComponet;