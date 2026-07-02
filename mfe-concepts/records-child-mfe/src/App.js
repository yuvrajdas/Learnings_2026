import { useState, useEffect } from 'react';

function App() {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.error(error);
      setRecords([]);
    }
  }
  useEffect(() => {
    getRecords();
  }, []);
  return (
    <>
    <h1>Records</h1>
    {records.length > 0 ? (
      <ul>
        {records.map(record => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      ) : (
        <p>No records found</p>
      )}
    </>
  );
}

export default App;
