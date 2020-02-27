import {connect} from 'react-redux';
import List from './List';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

export const getColumnsForList = ({columns}, listId) => columns.filter(columns => columns.listId == listId);

export default connect(mapStateToProps)(List);