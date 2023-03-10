import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function Table() {
  const { filteredPlanets } = useContext(MyContext);

  const thead = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL'];

  return (
    <table>
      <thead>
        <tr>
          {thead.map((item) => (
            <th key={ item }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((filter) => (
          <tr key={ filter.name }>
            <td>{filter.name}</td>
            <td>{filter.rotation_period}</td>
            <td>{filter.orbital_period}</td>
            <td>{filter.diameter}</td>
            <td>{filter.climate}</td>
            <td>{filter.gravity}</td>
            <td>{filter.terrain}</td>
            <td>{filter.surface_water}</td>
            <td>{filter.population}</td>
            <td>{filter.films}</td>
            <td>{filter.created}</td>
            <td>{filter.edited}</td>
            <td>{filter.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
