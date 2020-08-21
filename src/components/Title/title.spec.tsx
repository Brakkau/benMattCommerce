import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title } from './Title';

const mockText = 'hello';
const MockChild = () => <h1>{mockText}</h1>;
const MockComponent = () => (
  <Title>
    <MockChild />
  </Title>
);
const setUpTest = () => render(<MockComponent />);

describe('title', () => {
  test('should matchSapshot', () => {
    expect(setUpTest()).toMatchSnapshot();
  });
});
