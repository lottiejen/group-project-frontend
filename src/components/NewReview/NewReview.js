import { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { bindActionCreators } from 'redux';
import Button from "../Button/Button";

const NewReview = ( { gameID, handleNewReview }) => {

    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [stars, setStars] = useState(0);
    const [message, setMessage] = useState(false);
    const [sent, setSent] = useState(false);

    const handleName = (e) => {
        setName(e.currentTarget.value);
    }

    const handleReview = (e) => {
        setReview(e.currentTarget.value);
    }

    const handleStars = (newRating) => {
        setStars(newRating)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length > 1 && review.length > 1 && stars > 0){

            setMessage(false)

            let data = {
            "gameID" : gameID,
            "name" : name,
            "review" : review,
            "rating" : stars
            }

            setSent(true)
        
            //-------------------- call the API POST request --------------------
            handleNewReview(data);

        } else {
            setMessage(true)
        }
        
    }

    const formStyle={
        width: "100%",
    }

    const inputStyle = {
        border: "2px solid red"
    }

    return ( 
        <>
            <h6 className="mt-4"> Tell us what you thought!</h6>
            { sent ? <p> Thanks for your review! </p> : 
            <form  style={formStyle} className="mt-4" onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="reviewer name" placeholder="Name" value={name} onChange = {handleName}
                    style = {message ? inputStyle : null} />
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea className="form-control" id="review" rows="3" value={review} onChange={handleReview} style = {message ? inputStyle : null}></textarea>
                </div>
                <div style = {message ? inputStyle : null}>
                    <ReactStars 
                    isHalf = {false}
                    size = {25}
                    value = {stars} 
                    onChange = {handleStars}
                    />
                </div>
                {message ? <p>Please fill in all fields!</p> : null}
                <Button buttonText = "Submit" />
            </form> }
        </>)
}

export default NewReview;