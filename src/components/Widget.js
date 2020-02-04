import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Widget({ style, ...props }) {
  return <View style={[styles.container, style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 3,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    shadowColor: '#c2c2c2',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 0,
  },
});
