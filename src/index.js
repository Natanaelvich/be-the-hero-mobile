import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function src() {
  return (
    <>
      <StatusBar color="#7159c1" barStyle="light-content" />
      <Routes />
    </>
  );
}
