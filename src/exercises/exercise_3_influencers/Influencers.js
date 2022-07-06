import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import data from '../../data.json';
import './styles.css';

import uniqueBy from '../exercise_1_uniqueBy';
import filterBy from '../exercise_2_filterBy';

import SearchBar from './SearchBar';
import DataResults from './DataResults';

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
  fontFamily: 'Tahoma',
});

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort 
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState('');
  const [sortFlag, setSortFlag] = useState(false);
  const uniqueData = uniqueBy(data, 'member'); // use the uniqueBy util to unique our data by the "member" values
  const filteredData = filterBy(uniqueData, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]); // use the filterBy util to filter our data by the given search term

  if (sortFlag) {
    let priorityLvl = {
      Low: 1,
      Medium: 2,
      High: 3
    };
    filteredData.sort(function(a, b) {
      return priorityLvl[b.priority] - priorityLvl[a.priority];
    });
  }

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button className={sortFlag ? `active` : `button`} onClick={() => {setSortFlag(!sortFlag)}}>Sort by Priority</button>
      <div>
       <DataResults data={filteredData}/>
      </div>
    </Container>
  );
};

export default Influencers;
