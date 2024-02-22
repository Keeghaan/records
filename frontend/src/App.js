import './App.css';
import { useState, useEffect } from 'react';
import config from "./config.json";
import axios from 'axios'
import Header from './components/Header';
import RecordsListPage from './pages/RecordsListPage';

function App() {

  return (
   <div className='App'>
      <Header />
      <RecordsListPage />
   </div>
  );
}

export default App;
