
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
    const transformedData = action.data.reduce( (acc, game) => {
        acc[game.id] = game;
        return acc;
    }, {})

    return {
        ...state,
        recommendations: {...state.recommendations, ...transformedData}
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAMES": return setGames(state, action)
        case "SET_RECOMMENDATIONS": return setRecommendations(state, action)
        default: return state;
    }
}

export default reducer;