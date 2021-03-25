import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        gameID: state.nextGame
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);