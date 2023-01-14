import { inject, observer } from 'mobx-react';
import React from 'react';
import AuthPage from '../AuthPage';
import MainPage from '../MainPage';

const mapStore = inject('RootStore');

const RootPageView = (props: any) => {
  const {RootStore: {
    isLogged
  }} = props;


  if (!isLogged) {
    return <AuthPage />
  }

  return <MainPage />
};

export default mapStore(observer(RootPageView));