import React from 'react';
import PropTypes from 'prop-types';
import s from './Typography.module.scss';
import cn from 'classnames';

const Typography = (props: any) => {
  const {variant, children, weight} = props;

  return (
    <span
      className={
        cn(
          {
            [s.medium]: weight === 'medium',
            [s.bold]: weight === 'bold',
            [s.normal]: weight === 'normal',
          },
          {
            [s.body24]: variant === 'body24',
            [s.body16]: variant === 'body16'
          }
        )
      }
    >
      {children}
    </span>)
};

Typography.propTypes = {
  weight: PropTypes.oneOf([
    'bold',
    'medium',
    'normal'
  ]),
  variant: PropTypes.oneOf([
    'body24',
    'body16'
  ]),
  children: PropTypes.node
};

Typography.defaultProps = {
  weight: 'normal',
  children: 'body16'
};

export default Typography;