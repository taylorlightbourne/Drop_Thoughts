import React, { useSelector } from 'react';
import './LoginRegister.css';

import './LoginRegister.css';

const InspoCard = (props) => {


    return (
    <>
        <div className="quoteAPI">
            <p className="text">{props.quote}</p>
            <p className="text">- {props.author}</p>
        </div>
    </>
    )
};
export default InspoCard;
