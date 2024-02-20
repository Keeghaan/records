import './App.css';
import { useState, useEffect } from 'react';
import config from "./config.json";

function App() {
  const
  [
    data,
    setData
  ] = useState([]);

  useEffect(() =>
  {
    async function fetchData()
    {
        console.log(config.apiUrl);
        try
        {
          const response = await fetch(`${config.apiUrl}`);
          if (!response.ok)
            throw new Error("Not ok");
          const result = await response.json();
          console.log(result);
          setData(result);
        }
        catch (err)
        {
          console.error("ERROR: ", err);
        }
    }
    fetchData();
  }, [])

  return (
   <>
    Records
   </>
  );
}

export default App;
