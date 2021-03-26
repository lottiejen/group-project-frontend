import { connect } from 'react-redux';
import Game from './Game'
import { incrementGame} from '../../data/actions/state';
import {getSingleGame} from '../../data/actions/api'

const mapStateToProps = (state, { gameID }) => {
    return {
        game: state.games[gameID],
        nextGameID: state.recommendations[state.nextGame]
    }
}

const mapDispatchToProps = (dispatch, { gameID }) => {
    return {
        incrementDisplayGame: () => dispatch(incrementGame()),
        handleLoad: () => dispatch(getSingleGame(gameID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);