import React, { useEffect, useState } from 'react';
import config from '../config.json'
import axios from 'axios';
import ListItem from '../components/ListItem';
import { WiAlien } from 'react-icons/wi';
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const RecordsListPage = () => {

    const
    [
      data,
      setData
    ] = useState([]);
  
    const
    [
      notFound,
      setNotFound
    ] = useState(false);

    const endpoint = `${config.apiUrl}/records/`

    const getData = async() =>
    {
      try
      {
          const response = await axios.get(endpoint);
          setData(response.data);
          if (!response.data.length)
            setNotFound(true);
          return (response.data);
      }
      catch(error)
      {
          console.error("getData error:", error);
      }
    };
  
    useEffect(() =>
    {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
      <div className='records'>
        <div className='records-header'>
          <h2 className='records-title'>
            <WiAlien size={60} /> Records <WiAlien size={60} />
          </h2>
        </div>
          <ul>
              {
                  (!notFound)
                  ? data.map((elem) =>
                    {
                        return (<ListItem key={elem.id} elem={elem} />);
                    })
                  : <>No records</>
              }        
          </ul>
          <Link to="/record/new" className='add-button-icon'>
            <IoAddCircle />
          </Link>
          <p className='records-count'>{data.length} records</p> 
      </div>
  )
}

export default RecordsListPage