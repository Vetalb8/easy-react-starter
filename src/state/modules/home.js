const LOAD = 'home/load';

const initialState = {
    text: ''
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}

export function loadHome() {
    return {
        type: LOAD,
        text: 'Hello World!!!'
    };
}
