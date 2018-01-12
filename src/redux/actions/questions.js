export const GET_QUESTIONS = 'GET_QUESTIONS';

export function getQuestions() {
    const questions = require('../../JSON/R-Input FIeld List.json');

    return{
        type: GET_QUESTIONS,
        payload: questions
    }
}