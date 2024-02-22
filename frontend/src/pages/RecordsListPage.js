import React, { useEffect, useState } from 'react';
import config from '../config.json'
import axios from 'axios';
import ListItem from '../components/ListItem';

const RecordsListPage = () => {

    const
    [
      data,
      setData
    ] = useState([]);
  
    const endpoint = `${config.apiUrl}/records/`

    const getData = async() =>
    {
      const response = await axios.get(endpoint);
      setData(response.data);
      console.log(data);
      return (data);
    };
  
    const postData = async() =>
    {
      const text = "Huyuyuhuh";
  
      const response = await axios.post(endpoint, {text});
      console.log(response);
      return (response.data);
    }
  
    const handleSendData = async() =>
    {
      const newData = await postData();
      if (newData)
        setData(prevState => [...prevState, newData]);
    }
  
    useEffect(() =>
    {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className='records-list'>
        <ul>
            {
                data.map((elem) =>
                {
                    return (<ListItem key={elem.id} elem={elem} />);
                })
            }        
        </ul>
        <button onClick={handleSendData}>create new record</button>
    </div>
  )
}

export default RecordsListPage