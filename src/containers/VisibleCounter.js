import {connect} from 'react-redux'
import Counter from '../components/Counter'
import * as actions from '../actions'

function mapStateToProps(state) {
    return {
        count: state.CountReducer.count,
        wish_value: state.CountReducer.wish_value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(actions.increaseTodo()),
        onUpdateClick: (event) => dispatch(actions.updateTodo(event.target.value))
    }
    
}

const VisibleCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default VisibleCounter;