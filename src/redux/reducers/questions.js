import { GET_QUESTIONS } from '../actions/questions'

const initialState = {
    questions: []
}

function getQuestions (state, action) {
    return {
        questions: action.payload
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {    
        case GET_QUESTIONS:
            return getQuestions(state, action);

        default:
            return state;
    }
}

