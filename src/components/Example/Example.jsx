import React from 'react';
import { connect } from 'react-redux';
import { someAction } from '../../redux/reducers/common';
import { string, number, func } from 'prop-types';
import cn from 'classnames';

import s from './Example.css';

const Example = ({ className, clickHandler, counter }) => (
  <div className={cn(s.root, className)}>
    <button type="button" onClick={clickHandler}>
      example component {counter}
    </button>
  </div>
);

Example.propTypes = {
  className: string,
  counter: number,
  clickHandler: func,
};

Example.defaultProps = {
  className: '',
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
