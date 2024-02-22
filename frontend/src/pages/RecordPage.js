import axios from 'axios';
import React, { useState, useEffect } from 'react'
import config from "../config.json";
import { useParams } from 'react-router-dom';

const RecordPage = () => {
    const   { id } = useParams();
    const   endpoint = `${config.apiUrl}/records/${id}/`;
    const
    [
        record,
        setRecord
    ] = useState(null);

    useEffect(() =>
    {
        getRecordById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const   getRecordById = async() =>
    {
        const   response = await axios.get(endpoint)
            .catch((error) =>
            {
                console.error(error);
            })
        console.log("res", response.data);
        setRecord(response.data);
        return (response.data);
    };

  return (
    <div>
        <p>{record?.text}</p>
    </div>
  )
}

export default RecordPage