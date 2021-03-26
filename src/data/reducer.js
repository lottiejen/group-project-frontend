const setGames = (state, action) => {

    const transformedData = action.data.reduce( (acc, game) => {
        acc[game.id] = game;
        return acc;
    }, {})

    return {
        ...state,
        games: {...state.games, ...transformedData}
    }
}

const setRecommendations = (state, action) => {
    

    return {
        ...state,
        recommendations: action.data.map( (game) => {
            return game.id
        }),
        nextGame : 0
    }
}

const incrementGame = (state) => {
    return {
        ...state,
        nextGame: state.nextGame + 1
    }
}

const setGameReviews = (state, action) => {
    return {
        ...state,
        reviews: action.data
    }
}
const setError = (state, action) => {
    return {
        ...state,
        error: action.payload,
    }
}
    
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAMES": return setGames(state, action)
        case "SET_RECOMMENDATIONS": return setRecommendations(setGames(state, action), action)
        case "INCREMENT_GAME": return incrementGame(state)
        case "SET_REVIEWS": return setGameReviews(state, action)
        case "ERROR": return setError(state, action)
        default: return state;
    }
}

export default reducer;