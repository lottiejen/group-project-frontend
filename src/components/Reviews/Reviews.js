import {reviews} from '../../data/dummyData';

import Stars from './Stars';
import NewReview from '../NewReview';
import { useEffect } from 'react';
import axios from '../../data/axios-config';

//passed in game ID so can do an API call to get the reviews for that game -> when time comes for linking up API
const Reviews = ( props ) => {

    const reviewStyle = {
        // width: "80%",
    }
    
    useEffect(() => { 
        return (dispatch) => {
            axios.get(`/games/${props.id}/reviews`).then( ( {data}) => { console.log(data.data)})
        }
    });

    return (
        <> 
        {/* <div className = "container"> */}
            <h3> Reviews </h3>
            {reviews.data.map( (review, index) => {
                return (
                    <div className="card" key={index} style = {reviewStyle}>
                        <div className="card-body" >
                           <Stars className="card-title" stars = {review.rating} />
                            <h6 className="card-subtitle"> {review.name} </h6>
                            <p className="card-text"> {review.review}</p>
                        </div>
                    </div>
                )
            })}
            <NewReview gameID={ props.id } />
            {/* </div> */}
        </>
    )

}

export default Reviews;