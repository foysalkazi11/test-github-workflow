import React, { useState, useEffect } from "react";

const mockAxiosCall = () => {
  return {
    fundIdentifierText: "Interview Fund",
    shareClassArray: [
      {
        legalName: "share class A",
        currency: "euro"
      },
      {
        legalName: "share class B",
        currency: "dollar"
      }
    ]
  };
};

const App = () => {
  const [fatchData, setFatchData] = useState([]);
  const [newdata, setNewdata] = useState([]);

  useEffect(() => {
    const response = mockAxiosCall();
    setFatchData(response.shareClassArray);
  }, []);

  const handleClick = (e) => {
    if (!newdata.includes(e.target.textContent)) {
      newdata.push(e.target.textContent);
    }
  };

  return (
    <ul>
      {fatchData.map((data, index) => {
        return (
          <li onClick={handleClick} key={index}>
            {data.legalName}
          </li>
        );
      })}
      <br />
      <p>New data</p>
      <p>New data again</p>
      {newdata &&
        newdata.map((data, index) => {
          return (
            <li onClick={handleClick} key={index}>
              {data}
            </li>
          );
        })}
    </ul>
  );
};

export default App;
