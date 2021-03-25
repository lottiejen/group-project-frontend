//API Actions
import axios from '../../data/axios-config'
import {setGames, setRecommendations} from './state'
import history from '../../History';

export const newReview = (data) => (dispatch) => {

    axios.post(`/games/${data.gameID}/reviews`, {
        "name" : data.name,
        "review" : data.review,
        "rating" : data.rating
    }).then( ({data}) => {
        console.log(data.data)
    })
    console.log(data)
}

export const getGames = () => {

    return (dispatch) => {
        axios.get('/games').then( ( {data}) => {
        dispatch(setGames(data.data))
    })
}

}

export const getSingleGame = (gameID) => {

    return (dispatch) => {
        axios.get(`/games/${gameID}`).then( ({data}) => {
            dispatch(setGames([data.data]))
        })
    }

}

export const getRecommendations = (data) => {
    
    return (dispatch) => {
        axios.get('/games/recommendations', {
            params: {
                difficulty: +data.difficulty,
                time: +data.time,
                players: +data.players,
            }
        }).then( ( {data}) => {
            dispatch(setRecommendations(data.data))
            let firstID = data.data[0].id
            history.push(`games/${firstID}`)
            

    })
}}

export const getReviews = (gameID) => {
    
    return (dispatch) => {
        axios.get(`/games/${gameID}/reviews`).then( ( {data}) => {
            // console.log(data.data);
            // console.log("here")
        }).catch( (error) => console.log(error))
    }
}