import React from 'react';
import styles from './SearchResult.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';
import PropTypes from 'prop-types';


class SearchResult extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
    }

    render() {
      const { cards } = this.props;
      return (
        <Container>
          <section className={styles.component}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </section>
        </Container>
      );
    }
}

export default SearchResult;