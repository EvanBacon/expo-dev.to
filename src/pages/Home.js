import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Card, List, Title } from 'react-native-paper';
import { useHover } from 'react-native-web-hooks';

import Container from '../components/Container';
import Screen from '../components/Screen';
import SidebarWidget from '../components/SidebarWidget';

const CustomCard = () => (
  <Card
    style={{
      flex: 1,
      marginBottom: 12,
      borderRadius: 3,
      borderColor: '#D6D6D6',
      borderWidth: 1,
    }}
  >
    <Card.Cover
      style={{ height: 253 }}
      source={{
        uri:
          'https://thepracticaldev.s3.amazonaws.com/i/6pba7yczwddtemu0cla2.jpeg',
      }}
    />
    <Card.Content>
      <Title
        style={{
          margin: 8,
          marginTop: 12,
          marginLeft: 12,
          fontSize: 44,
          fontWeight: 'bold',
          lineHeight: 44,
        }}
      >
        💡🎁 JavaScript Visualized: Generators and Iterators
      </Title>
    </Card.Content>
    <Card.Title
      title="Lydia Hallie"
      subtitle="#javascript #node"
      left={props => (
        <Avatar.Image
          size={48}
          source={{
            uri:
              'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/198900/f497603e-77e4-4cfc-ae1a-a9214062aac4.jpeg',
          }}
        />
      )}
    />

    <View
      style={{
        flexDirection: 'row',
        paddingRight: 16,
        justifyContent: 'space-between',
      }}
    >
      <Card.Actions>
        <Button color="rgb(89, 89, 89)" mode="text" icon="heart">
          634
        </Button>
        <Button color="rgb(89, 89, 89)" mode="text" icon="comment">
          24
        </Button>
      </Card.Actions>
      <Card.Actions>
        <Text
          style={{
            marginRight: 16,
            color: 'rgb(89, 89, 89)',
            fontSize: 13,
            fontWeight: 'bold',
            paddingVertical: 6,
          }}
        >
          4 min read
        </Text>
        <Button color="#4630eb" mode="contained">
          Save
        </Button>
      </Card.Actions>
    </View>
  </Card>
);

function LeftProfileItem() {
  const ref = React.useRef(null);
  const isHovered = useHover(ref);
  return (
    <List.Item
      ref={ref}
      style={{
        marginBottom: 14,
        backgroundColor: isHovered ? '#f5f6f7' : 'white',
        borderRadius: 3,
        borderColor: '#D6D6D6',
        borderWidth: 2,
      }}
      title="Evan Bacon"
      description="@baconbrix"
      left={props => (
        <Avatar.Image
          {...props}
          size={50}
          source={{
            uri:
              'https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/192306/ce6f05b6-01d6-4271-941b-432679ea3b5d.jpeg',
          }}
        />
      )}
    />
  );
}

function SidebarWidgetListItem({ title, chip }) {
  const ref = React.useRef(null);
  const isHovered = useHover(ref);
  return (
    <List.Item
      ref={ref}
      style={{
        backgroundColor: isHovered ? '#f5f6f7' : 'white',
        borderColor: '#D6D6D6',
        borderBottomWidth: 2,
      }}
      title={title}
      description={chip}
    />
  );
}

function JobsSidebarWidget({ title }) {
  const data = [
    {
      title: 'Web dev content production',
      chip: 'jobs',
    },
    {
      title: 'Data Science And Engineering Services',
      chip: 'forhire',
    },
  ];
  return (
    <SidebarWidget title={title}>
      {data.map((item, index) => (
        <SidebarWidgetListItem
          title={item.title}
          key={`-${index}`}
          chip={item.chip}
        />
      ))}
    </SidebarWidget>
  );
}

function LeftNavigation() {
  return (
    <View
      style={{
        height: 400,
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: '#D6D6D6',
        borderWidth: 2,
      }}
    />
  );
}

export default function Home() {
  return (
    <Screen>
      <Container
        left={
          <>
            <LeftProfileItem />
            <LeftNavigation />
          </>
        }
        right={<JobsSidebarWidget title="Newest Listings" />}
      >
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Container>
    </Screen>
  );
}
