import {connect} from "react-redux";
import Counter from "./Counter";

// Powiazanie stanu z wlasciwoscia komponentu
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

// Akcje
let increaseAction = {type: "increase"};
let decreaseAction = {type: "decrease"};

// Powiazanie akcji z wlasciwosciami komponentu
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    };
}

// Komponent wyzszego rzedu
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

export default connectedComponent;