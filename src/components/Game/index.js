import { connect } from 'react-redux';
import Game from './Game'

const mapStateToProps = (state, { gameID }) => {
    return {
        game: state.recommendations[gameID],
    }
}

export default connect(mapStateToProps)(Game);