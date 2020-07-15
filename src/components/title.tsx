import React from 'react';

const PureFunction = (wordOne: string, wordTwo: string): string => {
  return `${wordOne} ${wordTwo}`;
};

export const Title = (): JSX.Element => {
  return (
    <div>
      <h1>{PureFunction('Hello', 'World')}</h1>
    </div>
  );
};
