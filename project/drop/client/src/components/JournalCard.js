import './LoginRegister.css';


const JournalCard = (props) => {


    return (
        <>
            <div className="journalDiv">
                <p>{props.info.map(entry => entry.mood)}</p>
            </div>
        </>
    )
};
export default JournalCard;
