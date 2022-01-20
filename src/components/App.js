import React from 'react';
import data from './data';
import Header from './Header';
import Main from './Main';

function App(props) {
  return (
    <div>
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;