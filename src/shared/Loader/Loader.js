import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Loader.scss';

export const Loader = ({ center }) => <span className={classnames('loader', { centered: center })}></span>;

Loader.propTypes = {
  center: PropTypes.bool,
};

Loader.defaultProps = {
  center: false,
};
