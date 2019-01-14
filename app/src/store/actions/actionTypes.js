export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const WAIT_ALL_ITEMS = 'WAIT_ALL_ITEMS';
export const INSPECT_ITEM = 'INSPECT_ITEM';
export const ADD_ITEM_VIEW = 'ADD_ITEM_VIEW';
export const GET_ADD_ITEM = 'GET_ADD_ITEM';
export const FIND_ITEM = 'FIND_ITEM'


export const get_All_Items =(items) =>{
    return {
        type: GET_ALL_ITEMS,
        items: items,
        componentView: 'viewAll'
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
        tempItem: value,
        componentView: 'viewOne'
    }
}
export const add_Item_View = () => {
    return {
        type: ADD_ITEM_VIEW,
        componentView: 'addItem'
    }
}

export const Get_Add_Item_ = (obj) => {
    return {
        type: GET_ADD_ITEM,
        name: obj.obj.name,
        ctg: obj.ctg,
        dtl: obj.dtl,
        pic: obj.pic
    }
}

export const insert_new_data_wait = (obj) => {
    return dispatch => {
        fetch(`http://localhost:2000/createValue`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}
export const delete_item = (value) => {
    return dispatch => {
        fetch(`http://localhost:2000/deleteValue/${value}`, {
            method: 'DELETE',
        })
    }
}
export const find_item = (value) => {
    return dispatch => {
        fetch(`http://localhost:2000/getValue/${value}`)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch(find_item_done(data))
        })    
        
    }
}

export const find_item_done = (data) => {
    return {
        type: FIND_ITEM,
        items: data,
    }
}