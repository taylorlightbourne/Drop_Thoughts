import React, { useEffect, useState } from 'react';
import { SUPABASE_KEY, url, supabase } from './SupabaseKey'
import JournalCard from './JournalCard';
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

    useEffect(() => {
        const getDefaultValues = async () => {
            const response = await fetch("https://quotes.rest/qod.json")
        }
    })


    return (
        <div className="main-container">
            <div className="main contents">
                <div className="header">
                    <h1>Journal</h1>
                    <button className="journalButton" onClick={(e) => supabaseGet()}></button>
                    <JournalCard info={info} />
                </div>
            </div>
        </div>
    )
};
export default Journal;
