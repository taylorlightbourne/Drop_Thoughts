import React, { useEffect, useState } from 'react';

const Journal = () => {
    const [quote, setQuote] = useState("")


    useEffect(() =>{
        const getDefaultValues = async () =>{
            const response = await fetch ("https://quotes.rest/qod.json")
        }
    })

    return (
    <div className="main-container">
        <div className="main contents">
            <div className="header">
                <h1>Journal</h1>
            </div>
        </div>
    </div>
    )
};
export default Journal;
