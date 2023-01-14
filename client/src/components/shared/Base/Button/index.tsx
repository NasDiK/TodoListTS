import React from 'react';
import s from './Button.module.scss';

interface PropValidation {
  children: String, //Текст
  variant: String //вариант
}

const BaseButton = (props: PropValidation) => {
  switch(props.variant) {
    case 'default':
      return (<button className={s.default}>{props.children}</button>)
  }
  return <button></button>
};

export default BaseButton;