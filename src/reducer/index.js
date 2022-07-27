const acsendingOrder = (state) => {
    const selectBox = document.getElementById("sort-product");
    var val = selectBox.options[selectBox.selectedIndex].value;
    const item = state.caps
    const acsendingChange = state.acsending
    if (val === 'cheap-first') {
        const newOrder = item.sort((a, b) => a.price - b.price);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'expensive-first') {
        const newOrder = item.sort((a, b) => (a.price > b.price) ? -1 : 1);
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'new') {
        const newOrder = item.sort((a, b) => new Date(b.created_data) - new Date(a.created_data))
        return {
            ...state,
            caps: newOrder,
            acsending: !acsendingChange
        }
    }
    if (val === 'popular') {
        const newOrder = item.sort((a, b) => a.id - b.id);
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
    cartItems: [
        {
            itemPic: 1,
            amount: 2,
            size: 'L',
            brandName: 'blahblah',
            capName: 'saveuslord',
            price: '3200',
        },
        {
            itemPic: 1,
            amount: 2,
            size: 'S',
            brandName: 'blahblah',
            capName: 'saveuslord',
            price: '3200',
        }
    ],
    acsending: false,
    cap: [],
    name: '',
    searchItem: [],
}


const reducer = (state = defaultState, action) => {
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
        case 'GET_CAPS_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'GET_SEARCH_ITEM':
            return {
                ...state,
                name: action.payload
            };
        case 'CAPS_ACSENDING':
            acsendingOrder(state);
        default:
            return state;
    }
}
export default reducer