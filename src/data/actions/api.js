//API Actions
import axios from '../../data/axios-config'
import {manyGames} from '../dummyData'
import {setGames} from './state'

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
        dispatch(setGames(manyGames.data))
    })
}

}