import { connect } from 'react-redux';
import Reviews from './Reviews'
import { getReviews } from '../../data/actions/api'

const mapStateToProps = (state) => {
    return {
       reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (gameID) => dispatch(getReviews(gameID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);