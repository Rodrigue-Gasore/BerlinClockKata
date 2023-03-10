import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../components/App';

afterEach(cleanup);

describe('App should', () => {
  test('render BerlinClock', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('berlin-clock')).toBeTruthy();
  });

  test('render StandardClock', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('standard-clock')).toBeTruthy();
  });

  test('render StandardClock', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('standard-clock')).toBeFalsy();
  });
});
