import {observer} from 'mobx-react';
import React from 'react';
import AuthPage from '../AuthPage';
import MainPage from '../MainPage';

const RootPageView = (props: any) => {
  const {RootStore} = props;


  if (!RootStore.isLogged) {
    return <AuthPage RootStore={RootStore} />
  }

  return <MainPage />
};

export default observer(RootPageView);