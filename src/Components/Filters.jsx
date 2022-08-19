import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function Filters() {
  const {
    setFilterByName, setColumn,
    setComparison, setValue,
    clickToFilter, value } = useContext(MyContext);

  console.log(setFilterByName);

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Digite aqui..."
        onChange={ ({ target: { value: nameValue } }) => setFilterByName(nameValue) }
      />
      <select
        data-testid="column-filter"
        onClick={ ({ target: { value: columnValue } }) => setColumn(columnValue) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onClick={ ({ target: { value: comparisonValue } }) => (
          setComparison(comparisonValue)
        ) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target: { value: filterValue } }) => setValue(filterValue) }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ clickToFilter }
      >
        Filtrar
      </button>
    </>
  );
}
