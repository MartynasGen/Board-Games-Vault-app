import * as actionType from './actions/actionTypes'

const initialState = {
    items: [],
    tempItem: [],
    inspectItem: 'viewAll',
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GET_ALL_ITEMS:
            return {
                ...state,
                items: action.items,
                inspectItem: action.componentView
            };
        case actionType.INSPECT_ITEM:
            return {
                ...state,
                tempItem: action.tempItem,
                inspectItem: action.componentView
            }
        case actionType.ADD_ITEM_VIEW:
            return {
                ...state,
                inspectItem: action.componentView
            }
        case actionType.GET_ADD_ITEM:
            return {
                ...state,
                name: action.name,
                category: action.ctg,
                details: action.dtl,
                pic: action.pic,
            }
        case actionType.FIND_ITEM:
            return {
                ...state,
                items: action.items
            }
        case actionType.SEARCH_ITEM:
            return {
                ...state,
                items: action.items
            }
        case actionType.EDIT_ITEM:
            return {
                ...state,
                inspectItem: action.componentView
            }
         default:   
    }
    

    return state
}

export default reducer