import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { useHover } from 'react-native-web-hooks';

import SidebarWidget from './SidebarWidget';

function SidebarWidgetListItem({ title, chip }) {
  const ref = React.useRef(null);
  const isHovered = useHover(ref);
  return (
    <List.Item
      ref={ref}
      style={{ backgroundColor: isHovered ? '#f5f6f7' : 'white' }}
      title={title.toUpperCase()}
      description={chip}
    />
  );
}

export default function SearchFilter() {
  const data = [
    { title: 'Posts' },
    { title: 'Podcasts' },
    { title: 'People' },
    { divider: true },
    { title: 'Only My Posts' },
  ];

  return (
    <SidebarWidget title="search results">
      {data.map((item, index) =>
        item.divider ? (
          <Divider key={`-${index}`} />
        ) : (
          <SidebarWidgetListItem title={item.title} key={`-${index}`} />
        )
      )}
    </SidebarWidget>
  );
}

function Divider() {
  return (
    <View
      style={{
        maxHeight: 1,
        minHeight: 1,
        flex: 1,
        backgroundColor: '#EBEBEB',
        marginHorizontal: 12,
      }}
    />
  );
}
