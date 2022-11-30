import { ADD, REMOVE,CHANGE } from "./actions";

const defaultState = {
    itemsInCart : [],
    mapItemAndTotalPrice : new Map(),
    totalItemsPrice: 0
}

export const itemsReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD:
            const newItemsInCart = [...state.itemsInCart]
            //Add if unique
            let check = false
            if (newItemsInCart.find(obj => obj.name === action.item.name)) {
                check = true;
            }
            if (check === false) {
                newItemsInCart.push(action.item);
            }

            // Map id to price
            state.mapItemAndTotalPrice.set(action.item.id,action.item.price)

            // Update total price in storage
            state.totalItemsPrice += action.item.price;
            return {
                ...state, itemsInCart : newItemsInCart
            }
            
        case REMOVE:
            const itemsInCartAfterDel = [...state.itemsInCart].filter(item => item.id !== action.item.id);
            
            // Map id to price, just using copy, why not
            let mapRemove = state.mapItemAndTotalPrice;

            mapRemove.delete(action.item.id)

            let priceOnDel = 0;
            for (let value of mapRemove.values()){
                priceOnDel += value;
            }

            // Update total price in storage
            state.totalItemsPrice = priceOnDel;    

            return {
                ...state,itemsInCart : itemsInCartAfterDel, mapItemAndTotalPrice: mapRemove
            }

        case CHANGE:
            let mapChange = state.mapItemAndTotalPrice;

            mapChange.set(action.item.id, (action.counter*action.item.price));


            let price = 0;
            for (let value of mapChange.values()){
                price += value;
            }
            // Update total price in storage
            state.totalItemsPrice = price;    

            return {
                ...state, mapItemAndTotalPrice : mapChange
            }

        default:
            return state
    }
};