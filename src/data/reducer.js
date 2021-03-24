
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


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAMES": return setGames(state, action)
        default: return state;
    }
}

export default reducer;