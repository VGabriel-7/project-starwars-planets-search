import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const resultAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((promise) => promise.json());
      const planetsAPI = resultAPI.results.filter((obj) => delete obj.residents);
      setPlanets(planetsAPI);
    };
    fetchPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { planets } }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
