import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  Icon.propTypes = {
    name: PropTypes.node,
  },

  <i className={`fas fa-${props.name}`}></i>
);

export default Icon;
