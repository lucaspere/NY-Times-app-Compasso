import React, { useState } from 'react';
import { Provider } from 'react-redux';

import storeConfig from './src/redux/storeConfig';

import RootStacks from './src/routers/RootStacks';
import ModalLayout from './src/components/ModalLayout';

const store = storeConfig();

const App = () => {
  return (
    <Provider store={store}>
      <RootStacks />
      <ModalLayout /> 
    </Provider>
  );
}

export default App;
