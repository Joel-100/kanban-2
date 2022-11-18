import axios from 'axios';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const missions = [];
const url = 'https://api.spacexdata.com/v3/missions';

export const FetchMissionsHandler = () => async (dispatch) => {
  const response = await axios.get(url);
  return dispatch({ type: FETCH_MISSIONS, payload: response.data });
};

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => ({ ...mission, active: false }));

    default:
      return state;
  }
};

export default missionsReducer;
