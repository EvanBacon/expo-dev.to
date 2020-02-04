import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { useDimensions } from 'react-native-web-hooks';
import { useNavigation } from 'react-navigation-hooks';

function SearchBar() {
  const { navigate } = useNavigation();

  const [value, setValue] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onSubmitEditing={() => {
        navigate('search', { q: value });
      }}
      style={{
        borderRadius: 3,
        borderColor: focused ? 'rgb(78, 87, 239)' : 'transparent',
        borderWidth: StyleSheet.hairlineWidth,
        outlineStyle: 'none',
        width: '50%',
        minWidth: 248,
        backgroundColor: '#e8e7e7',
        paddingHorizontal: 9,
        paddingVertical: 6,
        fontSize: 16,
      }}
      placeholder="Search"
      value={value}
      onChangeText={setValue}
    />
  );
}

function Logo() {
  return (
    <Text
      accessibilityRole="link"
      href="/"
      style={{
        backgroundColor: 'black',
        borderRadius: 2,
        padding: 8,
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      BACON
    </Text>
  );
}

export default function Header() {
  const {
    window: { width },
  } = useDimensions();

  const showComposeButton = width >= 560;

  return (
    <View
      style={{
        backgroundColor: '#FDF9F4',
        flex: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

        height: 44,
        zIndex: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1250,
        }}
      >
        <Logo />
        <SearchBar />
        <View style={{ flexDirection: 'row' }}>
          {showComposeButton && (
            <TouchableHighlight
              onPress={() => {}}
              underlayColor="#66e2d5"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 3,
                paddingHorizontal: 12,
                borderRadius: 3,
                marginVertical: 4,
                marginRight: 12,
                borderWidth: 2,
                borderColor: 'black',
                backgroundColor: '#66e2d5',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>WRITE A POST</Text>
            </TouchableHighlight>
          )}
          <Avatar.Image
            size={35}
            source={{
              uri:
                'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/192306/ce6f05b6-01d6-4271-941b-432679ea3b5d.jpeg',
            }}
          />
        </View>
      </View>
    </View>
  );
}
