export const ADD = "ADD_ITEM";
export const REMOVE = "REMOVE_ITEM";
export const CHANGE = "CHANGE_COUNTER";

export const addItemToCart = (itemPassed)=>{
    return(
        {
            type: ADD,
            item : itemPassed
        }
    )
};

export const removeItemInCart = (itemPassed)=>{
    return(
        {
            type: REMOVE,
            item : itemPassed
        }
    )
};

export const changedCounter = (itemPassed, counterPassed)=>{
    return(
        {
            type: CHANGE,
            item : itemPassed,
            counter : counterPassed
        }
    )
};
