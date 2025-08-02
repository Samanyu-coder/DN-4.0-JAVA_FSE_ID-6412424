import React from 'react';
import OfficeList from './Components/OfficeList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental App</h1>
      <img src="/office.jpg" alt="Office Space" width="400" />
      <OfficeList />
    </div>
  );
}

export default App;
