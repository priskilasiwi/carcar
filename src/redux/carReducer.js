const initialState = {
    dataCar:[],
}

const carReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_DETAILS":
            return{
                ...state,
                dataCar:action.payload
            }
            default:
                return state;
    }
}

export default carReducer;