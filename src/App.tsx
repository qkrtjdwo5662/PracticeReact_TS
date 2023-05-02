import React from 'react';
import Tail from './components/Tail';
import TestHeader from './components/TestHeader';

function App() {
  return (
    <div className='app'>
      <TestHeader isLogin={true} userId='park'/>
    </div>
      
  );
}

export default App;
