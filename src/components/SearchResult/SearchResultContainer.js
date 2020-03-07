import { connect } from 'react-redux';
import SearchResult from './SearchResult.js';
import { getCardsFiltered } from '../../redux/cardsRedux';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  cards: getCardsFiltered(state),
});

export default connect(mapStateToProps)(SearchResult);