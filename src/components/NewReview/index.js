import { connect } from 'react-redux';
import NewReview from './NewReview';
import { newReview } from '../../data/actions/api'

const matchStateToProps = (state) => {
    return {
        gameID : state.gameID
    }
}


const matchDispatchToProps = dispatch => {

    return {
        handleNewReview: (data) => dispatch(newReview(data))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(NewReview);