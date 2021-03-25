//State action

export const setGames = (data) => {
    return {
        type: "SET_GAMES",
        data: data
    }
}

export const setRecommendations = (data) => {
    return {
        type: "SET_RECOMMENDATIONS",
        data: data,
    }
}

export const nextGame = (gameID) => {
    return {
        type: "NEXT_GAME",
        gameID: gameID
    }
}