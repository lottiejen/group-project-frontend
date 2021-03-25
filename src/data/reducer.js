
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

    // console.log(action.data[0].id)

    return {
        ...state,
        recommendations: {...state.recommendations, ...transformedData},
        displayedGame: action.data[0].id
    }
}

const selectNextGame = (state, action) => {
    console.log("here - reducer", action.gameID)

    //turn games into an array
    let gamesArray = Object.values(state.recommendations);

    //find index in games array of game with current ID
    let gameIDArray = gamesArray.map( (game) => {
        return game.id
    })

    let currentGameIndex = gameIDArray.indexOf(action.gameID);

    //index in array of next game
    let nextGameIndex = currentGameIndex + 1;

    //id of game next in array
    let nextGameID = gameIDArray[nextGameIndex];

    return {
        ...state,
        displayedGame : nextGameID
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAMES": return setGames(state, action)
        case "SET_RECOMMENDATIONS": return setRecommendations(state, action)
        case "NEXT_GAME": return selectNextGame(state, action)
        default: return state;
    }
}

export default reducer;