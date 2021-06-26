import React, { useState } from 'react';
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import './Journal.css'
import JournalCard from './JournalCard';
import Navbar from './Navbar.js';
const hello = "hello"

const Journal = () => {
    const [quote, setQuote] = useState("")

    const [info, setInfo] = useState([])
    const supabaseGet = async () => {

        const { data, error } = await supabase
            .from('Post')
            .select()

        console.log(data)
        setInfo(data)
    }

    return (
        <>
        <Navbar/>
        <div className="main-container"
        >
                <div className="header">
                    <h1>Journal</h1>
                </div>
                    <button className="journalButton" onClick={(e) => supabaseGet()}></button>
                    <div>
                        <JournalCard info={info} />
                </div>
        </div >
        </>
    )
};
export default Journal;
