import React from 'react';

const OfficeList = () => {
  const offices = [
    { name: 'Downtown Hub', rent: 55000, address: '12 MG Road, Bengaluru' },
    { name: 'Tech Square', rent: 65000, address: '42 Electronic City, Bengaluru' },
    { name: 'WorkNest', rent: 48000, address: '9 Park Street, Kolkata' },
    { name: 'Skyline Office', rent: 72000, address: '19th Floor, Tower B, Mumbai' }
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent > 60000 ? 'green' : 'red',
          fontWeight: 'bold'
        };

        return (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={rentStyle}>₹{office.rent.toLocaleString()}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
