import React from 'react';

import CustomCard from '../components/CardItem';
import Container from '../components/Container';
import SearchFilter from '../components/SearchFilter';

import Screen from '../components/Screen';

export default function Search() {
  return (
    <Screen>
      <Container left={<SearchFilter />}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Container>
    </Screen>
  );
}
