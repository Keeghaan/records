import './App.css';
import { useState, useEffect } from 'react';
import config from "./config.json";

function App() {

  useEffect(() =>
  {
    console.log(config.apiUrl);
  }, [])

  return (
   <>
    Records
   </>
  );
}

export default App;
