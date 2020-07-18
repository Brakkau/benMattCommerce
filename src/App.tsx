import React from 'react';

// Components
import { Title } from './components/Title/Title';

// eslint-disable-next-line functional/functional-parameters
const App = (): React.ReactElement => (
  <>
    <Title>
      <div>A title</div>
    </Title>

    <Title>
      <h2>A title with</h2>
      <h2>more than one child!</h2>
    </Title>
  </>
);

export default App;
