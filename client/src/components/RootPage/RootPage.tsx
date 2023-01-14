import {Provider} from 'mobx-react';
import React from 'react';
import RootPageView from './RootPageView';
import RootStore from '../../stores/RootStore/rootStore';


const rootStore = new RootStore();

const RootPage = (props: any) => {
  return (
    <Provider RootStore={rootStore}>
      <RootPageView />
    </Provider>
  );
};

export default RootPage;