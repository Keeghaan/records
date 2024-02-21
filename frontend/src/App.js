import './App.css';
import { useState, useEffect } from 'react';
import config from "./config.json";
import axios from 'axios'

const apiUrl = config.apiUrl;

function App() {

  const
  [
    data,
    setData
  ] = useState([])
  const endpoint = `${config.apiUrl}/records/`

  const fetchData = async() =>
  {
    const response = await axios.get(endpoint);
    setData(response.data);
    console.log(data);
    return (data);
  };

  const postData = async() =>
  {
    const text = "Hello WoOooorld";

    const response = await axios.post(endpoint, {text});
    console.log(response);
    return (response.data);
  }

  const handleSendData = async() =>
  {
    const newData = await postData();
  }

  useEffect(() =>
  {
    fetchData();
  }, [])

  return (
   <>
      <ul>
        { data.map(elem => <li key={elem.id}>{elem.text}</li>) }        
      </ul>
      <button onClick={handleSendData}>create new record</button>
   </>
  );
}

export default App;
