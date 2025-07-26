import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        name="React Fundamentals"
        status="ongoing"
        startDate="2025-06-01"
        endDate="2025-08-01"
      />
      <CohortDetails
        name="Advanced JavaScript"
        status="completed"
        startDate="2025-03-01"
        endDate="2025-05-30"
      />
    </div>
  );
}

export default App;
