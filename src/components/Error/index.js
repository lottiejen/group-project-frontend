import { connect } from 'react-redux';
import Error from './Error'


const mapStateToProps = (state) => {
    
    return {
        error: state.error,
    }
}

export default connect(mapStateToProps)(Error);