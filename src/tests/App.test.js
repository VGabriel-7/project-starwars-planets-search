import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import MyProvider from '../Context/MyProvider';
import mockData from './utills/mockData';

const mockAPI = () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
};

describe('Renderização do App', () => {
  beforeEach(mockAPI);
  afterEach(() => jest.clearAllMocks());
  it('Testa se é renderizado ', async () => {
    render(
      <MyProvider>
    <App />
  </MyProvider>
    );
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      const table = screen.getAllByRole('row');
      const name = screen.getByTestId('name-filter');
      const column = screen.getByTestId('column-filter');
      const value = screen.getByTestId('value-filter');
      const comparison = screen.getByTestId('comparison-filter');
      const buttonFilter = screen.getByTestId('button-filter');
      
      expect(table).toHaveLength(11);
      expect(name).toBeInTheDocument();
      expect(column).toBeInTheDocument();
      expect(comparison).toBeInTheDocument();
      expect(value).toBeInTheDocument();
      expect(buttonFilter).toBeInTheDocument();
    });
  });

  it('Testa filtro de diameter maior que', async () => {
    render(
      <MyProvider>
    <App />
  </MyProvider>
    );
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      const table = screen.getAllByRole('row');
      expect(table).toHaveLength(11);
    });
    const column = screen.getByTestId('column-filter');
      const value = screen.getByTestId('value-filter');
      const comparison = screen.getByTestId('comparison-filter');
      const buttonFilter = screen.getByTestId('button-filter');

      userEvent.selectOptions(column, 'diameter')
      userEvent.selectOptions(comparison, 'maior que')
      userEvent.type(value, '9000')
      userEvent.click(buttonFilter);
      const table = screen.getAllByRole('row');
      expect(table.length).toBe(8);
  })

  it('Testa filtro rotation_period igual a', async () => {
    render(
      <MyProvider>
    <App />
  </MyProvider>
    );
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      const table = screen.getAllByRole('row');
      expect(table).toHaveLength(11);
    });
    const column = screen.getByTestId('column-filter');
      const value = screen.getByTestId('value-filter');
      const comparison = screen.getByTestId('comparison-filter');
      const buttonFilter = screen.getByTestId('button-filter');

      userEvent.selectOptions(column, 'rotation_period')
      userEvent.selectOptions(comparison, 'igual a')
      userEvent.type(value, '23')
      userEvent.click(buttonFilter);
      const secondTable = screen.getAllByRole('row');
      expect(secondTable.length).toBe(4);
  })

  it('Testa filtro por populacao menor que', async () => {
    render(
      <MyProvider>
    <App />
  </MyProvider>
    );
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      const table = screen.getAllByRole('row');
      expect(table).toHaveLength(11);
    });
    const column = screen.getByTestId('column-filter');
      const value = screen.getByTestId('value-filter');
      const comparison = screen.getByTestId('comparison-filter');
      const buttonFilter = screen.getByTestId('button-filter');

      userEvent.selectOptions(column, 'population')
      userEvent.selectOptions(comparison, 'menor que')
      userEvent.type(value, '1000000')
      userEvent.click(buttonFilter);
      const thirdTable = screen.getAllByRole('row');
      expect(thirdTable.length).toBe(3);
  })

  it('Testa o filtro por nome', async () => {
    render(
      <MyProvider>
    <App />
  </MyProvider>
    );
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      const table = screen.getAllByRole('row');
      expect(table).toHaveLength(11);
    });
    const name = screen.getByTestId('name-filter');

    userEvent.type(name, 'Tatooine')
    const table = screen.getAllByRole('row');
    expect(table.length).toBe(2);
  })
})
