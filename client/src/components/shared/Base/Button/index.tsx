import React from 'react';
import s from './Button.module.scss';
import PropTypes from 'prop-types';

const BaseButton = (props: any) => {
  const {onClick} = props;
  switch(props.variant) {
    case 'outline':
      return (<button className={s.outline}>{props.children}</button>)
    case 'default':
    default:
      return (<button className={s.default} onClick={onClick}>{props.children}</button>)
  }
};

BaseButton.propTypes = {
  //Вариант
  variant: PropTypes.oneOf([
    'default',
    'outline'
  ]),
  //Содержимое
  children: PropTypes.node,
  //Отключение
  disabled: PropTypes.bool,
  //Событии при нажатии
  onClick: PropTypes.func
};

BaseButton.defaultProps = {
  variant: 'default'
};

export default BaseButton;