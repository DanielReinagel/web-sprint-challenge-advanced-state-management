import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURFS});
  axios.get("http://localhost:3333/smurfs")
    .then(resp => dispatch({type: FETCH_SUCCESS, payload: resp.data}))
    .catch(err => dispatch({type: FETCH_FAILED, payload: err}));
}

export const addSmurf = payload => dispatch => {
  dispatch({type: ADD_SMURF, payload});
  axios.post("http://localhost:3333/smurfs");
}

export const setError = payload => dispatch => {
  dispatch({type: ERROR_MESSAGE, payload});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.