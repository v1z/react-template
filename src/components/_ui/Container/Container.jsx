import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import s from './Container.css';

const propTypes = {
  /** Class dropped by component's parent (BEM mixing) */
  className: string,
  /** Aria role */
  role: string,
};

const Container = ({ className = '', children, role }) => (
  <div className={cn(s.root, className)} role={role || undefined}>
    {children}
  </div>
);

Container.propTypes = propTypes;

export default Container;
