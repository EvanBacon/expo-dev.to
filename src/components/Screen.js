import React from 'react';
import { View } from 'react-native';

import Header from './Header';

export default function App({ children }) {
  return (
    <View style={{ backgroundColor: '#F9F9FA', paddingTop: 44, flex: 1 }}>
      <Header />
      {children}
    </View>
  );
}
