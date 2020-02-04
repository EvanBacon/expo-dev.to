import React from 'react';
import { View } from 'react-native';
import { useDimensions } from 'react-native-web-hooks';

function LeftSideBar({ children }) {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 8,
        marginRight: '0.786vw',
        width: 280,
        maxWidth: 280,
      }}
    >
      {children}
    </View>
  );
}

function RightSideBar({ children }) {
  return (
    <View
      style={{
        flex: 1,
        marginRight: 8,
        marginLeft: '0.786vw',
        width: 280,
        maxWidth: 280,
      }}
    >
      {children}
    </View>
  );
}

export default function Container({ left, right, children }) {
  const {
    window: { width },
  } = useDimensions();

  const showLeftSideBar = width >= 960;
  const showRightSideBar = width >= 1120;

  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          marginTop: 26,
          maxWidth: 1250,
          minHeight: 440,
          flexDirection: 'row',
          flex: 1,
        }}
      >
        {showLeftSideBar && <LeftSideBar>{left}</LeftSideBar>}
        <View style={{ marginLeft: '2.3%', marginRight: 15, flex: 1 }}>
          {children}
        </View>
        {showRightSideBar && <RightSideBar>{right}</RightSideBar>}
      </View>
    </View>
  );
}
