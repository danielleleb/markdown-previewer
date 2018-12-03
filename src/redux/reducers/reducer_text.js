import Placeholder from '../placeholder'
const initialState = Placeholder;

export default function (state = [initialState], action) {
    switch(action.type) {
        case 'TEXT_UPDATED':
            return [action.payload, ...state];
        default:
            return state
    }
}