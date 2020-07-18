import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Title } from './Title';

let mockText = 'Test';
const MockChild = () => <h1>{mockText}</h1>;
const MockComponent = () => <Title><MockChild /></Title>;
const setUpTest = () => render(<MockComponent />);


describe('title', () => {
  test('render title', () => {
    setUpTest();
  });
  
  test('should matchSapshot', () => {
    expect(setUpTest()).toMatchSnapshot();
  });

  test('Text is rendered', async () => {
    expect(setUpTest().getByText(mockText)).toBe(<h1>{mockText}</h1>);
  })
  

  test('Text is rendered', async () => {
    expect(mockText).toBe(document.querySelector('h1'));
  })
});
