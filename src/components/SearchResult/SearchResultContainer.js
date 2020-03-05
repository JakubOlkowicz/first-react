import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsFiltered } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsFiltered(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);