import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import {header} from '../../data/dataStore';

class Header extends React.Component {
    static propTypes = {
      to: PropTypes.node,
    }
    render(){
      return(
        <div className={styles.Component}>
          <Container>
            <div className={styles.wrapper}>
              <Link to='/' className={styles.logo}>
                <Icon name={header.iconName} />
              </Link>
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
              </nav>
            </div>      
          </Container>
        </div>
      ); 
    }
}

export default Header;