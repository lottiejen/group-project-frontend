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


export const incrementGame = () => {
    return {
        type: "INCREMENT_GAME"
    }
}

export const setReviews = (data) => {
    return {
        type: "SET_REVIEWS",
        data: data
    }
}
    
export const setError = (message) => {
    return {
        type: "ERROR",
        payload: message,
    }
}