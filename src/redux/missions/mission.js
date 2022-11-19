import axios from 'axios';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const TOGGLE_MISSION = 'TOGGLE_MISSION';
const missions = [];
const url = 'https://api.spacexdata.com/v3/missions';

export const FetchMissionsHandler = () => async (dispatch) => {
  const response = await axios.get(url);
  const missionsData = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return dispatch({ type: FETCH_MISSIONS, payload: missionsData });
};

export const ToggleMission = (id) => ({ type: TOGGLE_MISSION, id });

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload.map((mission) => ({ ...mission, active: false }));
    case TOGGLE_MISSION:
      return state.map((mission) => (mission.mission_id === action.id
        ? { ...mission, active: !mission.active }
        : { ...mission }));
    default:
      return state;
  }
};
export default missionsReducer;
