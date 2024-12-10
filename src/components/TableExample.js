import React from 'react';
import '../styles/TableExample.css';

const TableExample = () => {
  // Sample data for the tables
  const data1 = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Sam Wilson', age: 23, city: 'Chicago' },
    { id: 4, name: 'Lisa Johnson', age: 29, city: 'San Francisco' },
    { id: 5, name: 'Mike Brown', age: 41, city: 'Seattle' },
  ];

  const data2 = [
    { id: 6, name: 'Sara Lee', age: 37, city: 'Miami' },
    { id: 7, name: 'Tom Harris', age: 22, city: 'Boston' },
    { id: 8, name: 'Emily Davis', age: 33, city: 'Dallas' },
    { id: 9, name: 'Robert White', age: 40, city: 'Austin' },
    { id: 10, name: 'Nancy Green', age: 31, city: 'Denver' },
  ];

  return (
    <div className="table-example">
      <h1>Scrollable Tables Example</h1>

      <div className="tables-container">
        {/* First Table */}
        <div className="table-container">
          <h2>Table 1</h2>
          <table id='table1'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Second Table */}
        <div className="table-container">
          <h2>Table 2</h2>
          <table id='table2'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableExample;
