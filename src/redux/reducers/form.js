import { SAVE_CHANGE, GET_RESULT, RESET_VALUES, SHOW_ERROR } from '../actions';

const initialState = {
    fav_mov: {
      value: '',
      checked: false
    },
    fav_jedi: {
      value: '',
      checked: false
    },
    fav_sith: {
      value: '',
      checked: false
    },
    fav_planet: {
      value: '',
      checked: false
    },
    force_select: {
      value: '',
      checked: false
    },
    form_result: {
      submitted: false,
      message: '',
      title: '',
      color: '',
      image: ''
    },
    error: false
}

function saveChange (state, action) {
  var name = action.id;
  return {
    ...state, 
    [name]: {
      value: action.payload,
      checked: true
    }
  }
}

function getResult (state, action) {

  return {
    ...state, 
    form_result: {
      submitted: true,
      message: action.payload.message,
      title: action.payload.title,
      color: action.color,
      image: action.image
    }
  }
}

function showError (state, action) {
  return {
    ...state,
    error: action.payload
  }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        
      case SAVE_CHANGE: 
        return saveChange(state, action);

      case GET_RESULT:
        return getResult(state, action);

      case RESET_VALUES:
        return state = initialState;
      
      case SHOW_ERROR:
        return showError(state, action);
         
      default:
        return state;
    }
  }

