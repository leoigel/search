import React from 'react';
import { Container } from '../container';
import { Search } from './search';
import { SortBy } from './sortBy';
import { FilterDropDown } from './filterDropDown';

export const SearchContainer = () => {
  return (
    <Container>
      <div className='flex justify-between'>
        <Search />
        <div className='flex justify-between gap-3'>
          <SortBy />
          <FilterDropDown />
        </div>
      </div>
    </Container>
  );
};
