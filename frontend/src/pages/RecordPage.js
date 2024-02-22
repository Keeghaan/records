import axios from 'axios';
import React, { useState, useEffect } from 'react'
import config from "../config.json";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GrCaretPrevious } from "react-icons/gr";

const RecordPage = () => {
    const   navigate = useNavigate();
    const   { id } = useParams();
    const   endpoint = `${config.apiUrl}/records/${id}/`;
    const
    [
        record,
        setRecord
    ] = useState({text: ""});
    
    const
    [
        updated,
        setUpdated
    ] = useState(false);

    const
    [
        changePage,
        setChangePage
    ] = useState(false)

    useEffect(() =>
    {;
        if (changePage)
        {
            navigate("/");
        }
        getRecordById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, changePage, navigate]);

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
                    if (error.response.status === 404)
                        navigate("/");
                    else
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
                if (!record?.text.length)
                    handleDeleteRecord();
                else
                    await axios.put((endpoint), {"text": record?.text}, { headers: { 'Content-Type': 'application/json' } });
                setChangePage(true);
            }
            catch (error)
            {
                console.error("handleUpdateRecord update error:", error);
            }
        }
        else if (id === 'new' && record?.text.length)
        {
            try
            {
                await axios.post(config.apiUrl + "/records/", {"text": record?.text}, {headers: {'Content-Type': 'application/json'}});
                setChangePage(true)
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
                setChangePage(true);
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
        <div className='record-updates'>
           {
                (updated || id === 'new')
                ? <>
                    <input
                        type="text"
                        value={record?.text.length ? record.text : ""}
                        onChange={(e) => id !== 'new' ? setRecord({...record, 'text': e.target.value}) :  setRecord({'text': e.target.value}) }
                    />
                    <button onClick={handleUpdateRecord}>{(id === 'new') ? 'Add' : 'Update'}</button>
                </>
                : 
                <>
                    <div className='record-text'>{record?.text}</div>
                    <div className='record-update'>
                        <button className='update-button' onClick={() =>
                            { setUpdated(true)}}>
                                Modify</button>
                        <button className='delete-button' onClick={handleDeleteRecord}>Delete</button>
                    </div>
                </>
            }
        </div>
    </div>
  )
}

export default RecordPage