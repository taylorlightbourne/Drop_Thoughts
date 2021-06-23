import React, { useSelector } from 'react';
import './LoginRegister.css';

import './LoginRegister.css';

const InspoCard = (props) => {


    return (
    <>
        <div className="quoteAPI">
            <p>{props.quote}</p>
            <p>- {props.author}</p>
        </div>
    </>
    )
};
export default InspoCard;
