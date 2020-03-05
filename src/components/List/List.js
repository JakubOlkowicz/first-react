import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node.isRequired,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <Container>
        <Hero 
          titleText={title}
          image={image}
        />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </Container>
    );
  } 
}

export default List;
