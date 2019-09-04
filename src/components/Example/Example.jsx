import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { someAction } from '../../redux/actions';
import { string, number } from 'prop-types';
import cn from 'classnames';

import s from './Example.css';

const propTypes = {
  /** Class dropped by component's parent (BEM mixing) */
  className: string,
  /** Amount of state increment */
  incBy: number,
};

export const Example = ({ className = '', incBy = 1 }) => {
  const stateValue = useSelector(state => state.common.someCounter);
  const dispatchAction = useDispatch();

  const handleClick = () => dispatchAction(someAction(incBy));

  return (
    <button className={cn(s.root, className)} type="button" onClick={handleClick}>
      {`state value is: ${stateValue}`}
    </button>
  );
};

Example.propTypes = propTypes;
