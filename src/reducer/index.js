
const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (cap, item = {}, quantity) => {
    const {
        id = cap.id,
        count = 0,
        title = cap.name,
        total = 0 } = item,
        brandName = cap.brand.name;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*cap.price,
        brandName
    };
};
const updateOrder = (state, capsId, quantity) => {
    const { caps, cartItems } = state;

    const cap = caps.find(({id}) => id === capsId);
    const itemIndex = cartItems.findIndex(({id}) => id === capsId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(cap, item, quantity);
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};



const acsendingOrder = (state) => {
    const selectBox = document.getElementById("sort-product");
    var val = selectBox.options[selectBox.selectedIndex].value;
    const item = state.caps 
    const acsendingChange = state.acsending
    if (val === 'cheap-first') {
        const newOrder =  item.sort((a, b) => a.price - b.price);
        return {
        ...state,
        caps: newOrder,
        acsending: !acsendingChange
    }} 
    if (val === 'expensive-first'){
        const newOrder =  item.sort((a, b) => (a.price > b.price) ? -1 : 1);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'new'){
        const newOrder = item.sort((a,b) => new Date(b.created_data) - new Date(a.created_data))
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'popular'){
        const newOrder =  item.sort((a, b) => a.id - b.id);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
}

const defaultState = {
    caps: [],
    loading: false,
    error: false,
    cartItems: [],
    acsending: false,
    cap: []
}


const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'CAPS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'CAPS_LOADED':
            return {
                ...state,
                caps: action.payload,
                error: false,
                loading: false,
            };
        case 'CAP_LOADED':
            return {
                ...state,
                cap: action.payload,
                error: false,
                loading: false,
            };
        case 'CAPS_ERROR':
            return {
                ...state,
                caps: [],
                error: true,
                loading: false,
            };
        case 'CAPS_ACSENDING':
            return acsendingOrder(state)
        case 'CAP_ADD_TO_CART':
            return updateOrder(state, action.payload, 1 )
        case 'CAP_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1 )
        default:
            return state;
    }
}



export default reducer