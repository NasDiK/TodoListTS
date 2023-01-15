import React from 'react';
import AuthPageView from './AuthPageView';
import AuthPageStore from '../../stores/AuthPage/AuthPageStore';

const AuthPage = (props: any) => {
  const {RootStore} = props;
  const authPageStore = new AuthPageStore(RootStore);

  return (
    <AuthPageView AuthPageStore={authPageStore}/>
  );
};

export default AuthPage;