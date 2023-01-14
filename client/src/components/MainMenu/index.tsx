import React from 'react';

interface Properties {
  test: String
}

const MainMenu = (props: Properties) => {
  return (<div>Hello world {props.test}</div>)
};

export default MainMenu