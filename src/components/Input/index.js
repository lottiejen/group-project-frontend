import { connect } from 'react-redux';
import Input from './Input';
import { getRecommendations } from '../../data/actions/api';

const mapStateToProps = state => {
    return {
        recommendations: state.recommendations,
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        fetchRecommendations: (data) => dispatch(getRecommendations(data))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Input);