import React from 'react';
import Name from './Name';
import Surname from './Surname';
import { findByLabelText } from '@testing-library/react';

function App() {
  const names = ['Pasha', 'Sasha', 'Egor'];
  const surnames = ['Ivanov', 'Petrov', 'Sidorov'];


  return (
    <div className="App">
      <div style={{
            // в html я бы сделал через display flex, но тут так нельзя и я в тупике)
           }}>
      {names.map((item) => (
        <Name name={item}/>
      ))}
        {surnames.map((value) => (
          <Surname surname={value}/>
        ))}
      </div>
    </div>
  );
}

export default App;
