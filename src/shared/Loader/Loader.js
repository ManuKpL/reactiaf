import React from 'react';
import classnames from 'classnames';

import './Loader.scss';

export const Loader = ({ center }) => <span className={classnames('loader', { centered: center })}></span>;
