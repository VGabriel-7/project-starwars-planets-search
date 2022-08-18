import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setfilteredPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  useEffect(() => {
    const fetchPlanets = async () => {
      const resultAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((promise) => promise.json());
      const planetsAPI = resultAPI.results.filter((obj) => delete obj.residents);
      setPlanets(planetsAPI);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    setfilteredPlanets(planets.filter(({ name }) => name.includes(filterByName)));
  }, [filterByName]);

  const clickToFilter = () => {
    const filter = planets.filter((filterComp) => {
      let planetsFiltred;
      if (comparison === 'maior que') {
        planetsFiltred = (+filterComp[column]) > (+value);
      }
      if (comparison === 'menor que') {
        planetsFiltred = (+filterComp[column]) < (+value);
      }
      if (comparison === 'igual a') {
        planetsFiltred = (+filterComp[column]) === (+value);
      }
      return planetsFiltred;
    });
    setfilteredPlanets(filter);
  };

  return (
    <MyContext.Provider
      value={ {
        planets,
        filterByName,
        setFilterByName,
        filteredPlanets,
        setColumn,
        setComparison,
        setValue,
        column,
        comparison,
        value,
        setfilteredPlanets,
        clickToFilter } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
