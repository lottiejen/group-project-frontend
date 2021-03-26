import { connect } from 'react-redux';
import Games from './Games'
import { getGames } from '../../data/actions/api'


const mapStateToProps = state => {
    return{
        gamesData: state.games
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(getGames()),

    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Games);