import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import CustomCard from '../components/CardItem';
import Container from '../components/Container';
import Screen from '../components/Screen';
import Widget from '../components/Widget';

function ProfileHeader() {
  return (
    <View
      style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'center' }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 1250,
        }}
      >
        <View
          style={{
            flex: 1,
            borderRadius: 3,
            borderWidth: 2,
            borderColor: '#4630eb',
            shadowColor: '#4630eb',
            shadowOffset: { width: 5, height: 6 },
            shadowRadius: 0,
            paddingHorizontal: '10%',
            paddingTop: 25,
            marginHorizontal: 8,

            paddingBottom: 11,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar.Image
            size={200}
            source={{
              uri:
                'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/192306/ce6f05b6-01d6-4271-941b-432679ea3b5d.jpeg',
            }}
          />
          <View style={{ marginLeft: 24 }}>
            <Text style={{ fontSize: 60, fontWeight: 'bold' }}>Evan Bacon</Text>
            <Text style={{ fontSize: 18, color: '#666' }}>I work on Expo</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function InfoWidget({ title, content }) {
  return (
    <Widget style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3f30cf' }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginTop: 14,
          marginBottom: 8,
          color: '#0A0A0A',
        }}
      >
        {content}
      </Text>
    </Widget>
  );
}

export default function Home() {
  return (
    <Screen>
      <ProfileHeader />

      <Container
        left={
          <View>
            <InfoWidget
              title="skills/languages"
              content="TypeScript, JavaScript, Objective-C, Java, React, React Native"
            />
            <InfoWidget
              title="learning/trying"
              content="not wasting company time"
            />
            <InfoWidget
              title="projects and hacks"
              content="Expo web, electron, react-native-ink"
            />
            <InfoWidget title="available for" content="moral support" />
          </View>
        }
      >
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Container>
    </Screen>
  );
}
