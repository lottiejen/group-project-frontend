import { connect } from 'react-redux';
import Game from './Game'
import { nextGame } from '../../data/actions/state';

const mapStateToProps = (state, { gameID }) => {
    return {
        game: state.recommendations[state.displayedGame],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextGame: (gameID) => dispatch(nextGame(gameID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);