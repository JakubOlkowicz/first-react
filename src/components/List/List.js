import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './List.scss';
import HeroComponet from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
// import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node.isRequired,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns} = this.props;
    return (
      <section className={styles.component}>
        <HeroComponet 
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
        {/*
          // <div className={styles.creator}>
          //   <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          // </div>
          // */}
      </section>
    );
  } 
}

export default List;
