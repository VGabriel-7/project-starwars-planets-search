import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const resultAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((promise) => promise.json());
      const planetsAPI = resultAPI.results.filter((obj) => delete obj.residents);
      setPlanets(planetsAPI);
    };
    fetchPlanets();
  }, []);

  const filteredPlanets = filterByName.length > 0
    ? planets.filter(({ name }) => name.includes(filterByName))
    : [];

  return (
    <MyContext.Provider
      value={ {
        planets,
        filterByName,
        setFilterByName,
        filteredPlanets } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
