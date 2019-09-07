import React from 'react';
import cn from 'classnames';
import s from './Container.css';

type Props = {
  className?: string;
  role?: string;
};

export const Container: React.FC<Props> = ({children, className, role}) => (
  <div className={cn(s.root, className)} role={role}>
    {children}
  </div>
);
