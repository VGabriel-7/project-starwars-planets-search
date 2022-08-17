import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function Table() {
  const { planets } = useContext(MyContext);

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
        {planets.map((key) => (
          <tr key={ key.name }>
            <td>{key.name}</td>
            <td>{key.rotation_period}</td>
            <td>{key.orbital_period}</td>
            <td>{key.diameter}</td>
            <td>{key.climate}</td>
            <td>{key.gravity}</td>
            <td>{key.terrain}</td>
            <td>{key.surface_water}</td>
            <td>{key.population}</td>
            <td>{key.films}</td>
            <td>{key.created}</td>
            <td>{key.edited}</td>
            <td>{key.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
