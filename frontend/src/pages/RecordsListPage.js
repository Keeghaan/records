import React, { useEffect, useState } from 'react';
import config from '../config.json'
import axios from 'axios';
import ListItem from '../components/ListItem';
import { WiAlien } from 'react-icons/wi';
import AddButton from '../components/AddButton';

const RecordsListPage = () => {

    const
    [
      data,
      setData
    ] = useState([]);
  
    const endpoint = `${config.apiUrl}/records/`

    const getData = async() =>
    {
      try
      {
          const response = await axios.get(endpoint);
          setData(response.data);
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
          <WiAlien size={50}  /> Records <WiAlien size={50} />
        </h2>
        <p className='records-count'>{data.length} records</p>
      </div>
         <ul>
            {
                data.map((elem) =>
                {
                    return (<ListItem key={elem.id} elem={elem} />);
                })
            }        
        </ul>
        <AddButton />
    </div>
  )
}

export default RecordsListPage