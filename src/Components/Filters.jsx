import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function Filters() {
  const { setFilterByName } = useContext(MyContext);

  return (<input
    data-testid="name-filter"
    type="text"
    onChange={ ({ target: { value } }) => setFilterByName(value) }
  />);
}
