import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import s from './Container.css';

const Container = ({ className, children }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

Container.propTypes = {
  className: string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
