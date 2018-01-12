import axios from 'axios';

export const SAVE_CHANGE = 'SAVE_CHANGE';
export const GET_RESULT = 'GET_RESULT';
export const RESET_VALUES = 'RESET_VALUES';
export const SHOW_ERROR = 'SHOW_ERROR';

export const saveChange = (payload, id) => ({
	type: SAVE_CHANGE,
	payload,
	id
});

export const getResult = (payload, color, image) => ({
	type: GET_RESULT,
	payload,
	color, 
	image
});

export const resetValues = () => ({
	type: RESET_VALUES
});

export const showError = (payload) => ({
	type: SHOW_ERROR,
	payload
});

export function sendFormData (questions, color, image) {
	return dispatch => {
		axios.post('http://swforce.proficodev.com/testme', {
			fav_mov: questions.fav_mov.value,
			fav_jedi: questions.fav_jedi.value,
			fav_sith: questions.fav_sith.value,
			fav_planet: questions.fav_planet.value,
			force_select: questions.force_select.value
		})
		.then(response => response.data)
		.then(result => {
			if(result.title === 'The last Jedi!') {
				dispatch(getResult(result, color.blue, image.jedi));
			}
			else if (result.title === 'Sith Happens!') {
				dispatch(getResult(result, color.red, image.sith));
			}
			else {
				dispatch(getResult(result, color.yellow, image.middle));
			}
		})
		.catch(error => {
			console.log('Request failed! ', error);
		});
	}
}
