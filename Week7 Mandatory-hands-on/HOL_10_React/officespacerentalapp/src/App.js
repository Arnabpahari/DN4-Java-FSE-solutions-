import React from 'react';

function App() {
  const heading = <h1>Office Space, at Affordable Range</h1>;

  const imageURL = "office.jpeg";
  const imageElement = <img src={imageURL} width="500" height="300" alt="Office Space" />;

  // const office = {
  //   name: "Regus Corporate",
  //   rent: 75000,
  //   address: "Bangalore"
  // };

  const officeList = [
    { name: "WeWork Residency", rent: 85000, address: "Hyderabad" },
    { name: "SmartSpaces", rent: 55000, address: "Chennai" },
    { name: "Urban Desk", rent: 60000, address: "Delhi" },
    { name: "CoWorkHub", rent: 45000, address: "Pune" }
  ];

  return (
    <div>
      {heading}
      {imageElement}

      
      {
        officeList.map((item, index) => (
          <div key={index}>
            <p><b>Name:</b> {item.name}</p>
            <p>
              <b>Rent:</b>{" "}
              <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
                {item.rent}
              </span>
            </p>
            <p><b>Address:</b> {item.address}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;

