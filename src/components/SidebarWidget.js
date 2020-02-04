import React from 'react';
import { Text, View } from 'react-native';

export default function SidebarWidget({ title, children }) {
  return (
    <View
      style={{
        alignItems: 'stretch',
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: '#D6D6D6',
        borderWidth: 2,
      }}
    >
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 12,
          backgroundColor: '#f5f6f7',
          borderColor: '#D6D6D6',
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ color: '#0a0a0a', fontSize: 14, fontWeight: 'bold' }}>
          {title}
        </Text>
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
