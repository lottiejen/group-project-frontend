import { connect } from 'react-redux';
import NewReview from './NewReview';
import { newReview } from '../../data/actions/api'




const matchDispatchToProps = dispatch => {

    return {
        handleNewReview: (data) => dispatch(newReview(data))
    }
}

export default connect(null, matchDispatchToProps)(NewReview);