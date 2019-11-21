import React from 'react';
import {Nav} from './components/Nav/Nav';
import {Home} from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container App pt-4">
        <Home />
      </div>      
    </React.Fragment>
  );
}

export default App;
