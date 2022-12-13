import "./index.scss";

import {useState} from "react";

const Feedback = () => {
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const toggleShowReviewBox = () => {
        setShowReviewBox(!showReviewBox);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessageSent(true);
    }


    return (
        <div className="review-container">
            {!showReviewBox && (<button className="feedback-button" onClick={toggleShowReviewBox}>{'Feedback'}</button>)}
            
            {showReviewBox && (
                <div className="review-box">
                    <div className="top-container">
                    <button className="minimise-btn" onClick={toggleShowReviewBox}>-</button><br/>
                    </div>
                    {!messageSent? (<form className="feedback-form">
                        <textarea type='text' placeholder="Your feedback"/><br/>
                        <input type='submit' onClick={handleSubmit}/>
                    </form>): (<div className="message-sent">
                        <p>Thank you</p>
                        <p>Your feedback has been sent</p>
                    </div>)}
                </div>
            )}
        </div>

    )
}

export default Feedback;