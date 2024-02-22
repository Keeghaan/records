import axios from 'axios';
import React, { useState, useEffect } from 'react'
import config from "../config.json";
import { useParams, Link } from 'react-router-dom';
import { GrCaretPrevious } from "react-icons/gr";

const RecordPage = () => {
    const   { id } = useParams();
    const   endpoint = `${config.apiUrl}/records/${id}/`;
    const
    [
        record,
        setRecord
    ] = useState(null);
    
    const
    [
        updated,
        setUpdated
    ] = useState(false);

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

    const   handleUpdateRecord = async() =>
    {
        if (updated)
        {
            try
            {
                await axios.put(endpoint, {"text": record.text}, { headers: { 'Content-Type': 'application/json' } });
            }
            catch (error)
            {
                console.error(error);
            }
            setUpdated(false);
        }
    };

  return (
    <div className='record'>
        <div className='record-header'>
            <Link to="/">
                <GrCaretPrevious />
            </Link>
        </div>
        {
            (updated)
            ? 
            <>
                <input
                    type="text"
                    value={record?.text}
                    onChange={(e) => setRecord({...record, 'text': e.target.value})}
                />
                <button onClick={handleUpdateRecord}>Update</button>
            </>
            : 
            <>
                <p>{record?.text}</p>
                <button onClick={() =>
                    { setUpdated(true)}}>Modify this record</button>
            </>

        }
    </div>
  )
}

export default RecordPage