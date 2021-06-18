import React from 'react';

const MainPage = () => {

    return (
    <div className="main-container">
        <div class="main contents">
            <div className="header">
                <h1>Drop Thoughts</h1>
            </div>
            <form>
                <div className="subject__title">
                    <input placeholder="Subject"></input>
                </div>
                <div className="message__box">
                    <input placeholder="How Are You Feeling Today?"></input>
                </div>
                <div className="submit__btn">
                    <button type="submit" id="submit__btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
};

export default MainPage;