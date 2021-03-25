
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

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAMES": return setGames(state, action)
        case "SET_RECOMMENDATIONS": return setRecommendations(setGames(state, action), action)
        case "INCREMENT_GAME": return incrementGame(state)
        default: return state;
    }
}

export default reducer;