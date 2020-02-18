import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './List.scss';
import HeroComponet from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    imageSrc: PropTypes.node.isRequired,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  state = {
    columns: this.props.columns || [],
  }
  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  
  render() {
    return (
      <section className={styles.component}>
        <HeroComponet 
          titleText={this.props.title}
          image={this.props.image}
       />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
        {this.state.columns.map(({key, ...columnProps}) => (
          <Column key={key} {...columnProps} />
        ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  } 
}

export default List;
