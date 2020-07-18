import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('title', () => {
  test('render title', () => {
    render(<App />);
  });
  
  test('should matched snapshot', () => {
    const component = render(<App />)
    expect(component).toMatchSnapshot();
    
  });
});
