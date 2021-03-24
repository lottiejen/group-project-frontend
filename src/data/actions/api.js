//API Actions
import axios from '../../data/axios-config'
import {manyGames} from '../dummyData'
import {setGames, setRecommendations} from './state'
import history from '../../History';

export const newReview = (data) => {

    axios.post(`/game/${data.gameID}/reviews`, {
        "name" : data.name,
        "review" : data.review,
        "rating" : data.stars
    }).then( () => {
        //do something
    })
}

export const getGames = () => {

    return (dispatch) => {
        axios.get('/games').then( ( {data}) => {
        dispatch(setGames(data.data))
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