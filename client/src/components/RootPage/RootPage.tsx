import React from 'react';
import RootPageView from './RootPageView';
import RootStore from '../../stores/RootStore/rootStore';


const rootStore = new RootStore();

const RootPage = (props: any) => {
  return (
    <RootPageView RootStore={rootStore}/>
  );
};

export default RootPage;