import './LoginRegister.css';


const JournalCard = (props) => {


    return (
        <>
            <div className="journalCardContainer">
                <div className="dateDiv">
                    <ul>
                        {props.info.map((entry) => {
                            return <p>{entry.Date}</p>})}
                    </ul>
                </div>
                <div className="moodDiv">
                    <ul>
                        {props.info.map((entry) => {
                            return <p>{entry.mood}</p>})}
                            
                    </ul>
                </div>
            </div>
        </>
    )
};
export default JournalCard;
