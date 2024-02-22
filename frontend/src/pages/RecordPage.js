import axios from 'axios';
import React, { useState, useEffect } from 'react'
import config from "../config.json";
import { useParams, Link } from 'react-router-dom';
import { GrCaretPrevious } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

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
        try
        {
            if (id !== 'new')
            {
                try
                {
                    const   response = await axios.get(endpoint)
                    setRecord(response.data);
                    return (response.data);
                }
                catch (error)
                {
                    console.error("getRecordById error:", error);
                }
            }
        }
        catch (error)
        {
            console.error(error);
        }

    };

    const   handleUpdateRecord = async() =>
    {
        if (updated && id !== 'new')
        {
            try
            {
                if (!record?.text)
                    handleDeleteRecord();
                else
                    await axios.put((endpoint), {"text": record?.text}, { headers: { 'Content-Type': 'application/json' } });
            }
            catch (error)
            {
                console.error("handleUpdateRecord update error:", error);
            }
        }
        else if (updated && id === 'new')
        {
            try
            {
                await axios.post(endpoint, {"text": record?.text}, {headers: {'Content-Type': 'application/json'}});
            }
            catch (error)
            {
                console.error("handleUpdateRecord create error:", error);
            }
        }
        setUpdated(false);
    };

    const   handleDeleteRecord = async() =>
    {
        if (id !== 'new')
        {
            try
            {
                await axios.delete(endpoint, {'Content-Type': 'application/json'})
            }
            catch (error)
            {
                console.error("handleDeleteRecord", error);
            }
        }    
    }

  return (
    <div className='record'>
        <div className='record-header'>
            <Link to="/">
                <GrCaretPrevious />
            </Link>
        </div>
        {


            (updated || id === 'new')
            ? <>
                <input
                    type="text"
                    value={record?.text}
                    onChange={(e) => id !== 'new' ? setRecord({...record, 'text': e.target.value}) :  setRecord({'text': e.target.value}) }
                />
                <button onClick={handleUpdateRecord}>{(id === 'new') ? 'Add record' : 'Update record'}</button>
            </>
            : 
            <>
                <p>{record?.text}</p>
                <div className='update-or-delete'>
                    <button className='update-button' onClick={() =>
                        { setUpdated(true)}}>Modify</button>
                    <Link to="/">
                        this record or 
                        <button onClick={handleDeleteRecord}> delete <MdDelete /> </button> it
                    </Link>
                </div>
            </>
        }
    </div>
  )
}

export default RecordPage