import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.func,
      icon: PropTypes.node,
      addCard: PropTypes.func,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }    

    render(){
      const {title, icon, cards, addCard} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span></h3>
          <div className={styles.card}>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
        </section>
      );
    }
}
export default Column;

