import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import Rotas from './src/Rotas';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/components/TelaPadrao'

Reactotron.configure().useReactNative().connect();


export default function App() {
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
