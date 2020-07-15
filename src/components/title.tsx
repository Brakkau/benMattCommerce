import React from 'react';

const PureFunction = (wordOne: string, wordTwo: string): string => {
  return `${wordOne} ${wordTwo}`;
};

export const Title = (PureFunction('Hello', 'World')) => {
  return (
    <div>
      <h1>{PureFunction}</h1>
    </div>
  );
};
