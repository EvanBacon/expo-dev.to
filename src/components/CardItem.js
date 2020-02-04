import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Card, Title } from 'react-native-paper';

export default function CustomCard() {
  return (
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
}
