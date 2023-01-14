import { Provider } from 'mobx-react';
import React from 'react';
import AuthPageView from './AuthPageView';
import AuthPageStore from '../../stores/AuthPage/AuthPageStore';

const AuthPage = (props: any) => {
  const authPageStore = new AuthPageStore();

  return (
    <Provider AuthPageStore={authPageStore}>
      <AuthPageView />
    </Provider>
  );
};

export default AuthPage;