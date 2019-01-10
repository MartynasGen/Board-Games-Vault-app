import * as actionType from './actions/actionTypes'

const initialState = {
    items: [],
    tempItem: {
        name: '',
        pic: '',
        details: '',
        category: ''
    },
    inspectItem: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_ALL_ITEMS:
            return {
                ...state,
                items: action.items,
                inspectItem: action.inspectItem
            };
        case actionType.INSPECT_ITEM:
            return {
                ...state,
                tempItem: action.tempItem,
                inspectItem: true
            }
         default:   
    }
    

    return state
}

export default reducer