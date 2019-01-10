export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const WAIT_ALL_ITEMS = 'WAIT_ALL_ITEMS';
export const INSPECT_ITEM = 'INSPECT_ITEM'



export const get_All_Items =(items) =>{
    return {
        type: GET_ALL_ITEMS,
        items: items,
        inspectItem: false
    }
}

export const wait_All_Items = () => {
    return dispatch => {
        fetch('http://localhost:2000/getValues')
        .then((resp) => resp.json())
        .then((data) => {
            dispatch(get_All_Items(data))
        }) 
    }
}

export const inspect_Item = (value) => {
    return {
        type: INSPECT_ITEM,
        tempItem: value
    }
}
