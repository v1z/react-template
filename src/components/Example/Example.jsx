import React from 'react';
import { connect } from 'react-redux';
import { someAction } from '../../redux/reducers/common';
import { string, number, func, node } from 'prop-types';
import cn from 'classnames';

import s from './Example.css';

export const Example = ({ className, children, clickHandler, counter }) => (
  <div className={cn(s.root, className)}>
    <button type="button" onClick={clickHandler}>
      {children} {counter}
    </button>
  </div>
);

Example.propTypes = {
  className: string,
  counter: number,
  clickHandler: func,
  children: node || string,
};

Example.defaultProps = {
  className: '',
  children: 'example component',
};

const mapStateToProps = state => ({
  counter: state.common.someCounter,
});

const mapDispatchToProps = {
  clickHandler: someAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
