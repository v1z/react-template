import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { someAction } from '../../redux/actions';
import cn from 'classnames';
import s from './Example.css';

type Props = {
  className?: string;
  incBy?: number;
};

export const Example: React.FC<Props> = ({ className, incBy = 1 }) => {
  const stateValue = useSelector((state: any) => state.common.someCounter);
  const dispatchAction = useDispatch();

  const handleClick = () => dispatchAction(someAction(incBy));

  return (
    <button
      className={cn(s.root, className)}
      type="button"
      onClick={handleClick}
    >
      {`state value is: ${stateValue}`}
    </button>
  );
};
