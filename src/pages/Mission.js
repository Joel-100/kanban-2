import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchMissionsHandler } from '../redux/missions/mission';
import './mission.css';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (!missions.length) dispatch(FetchMissionsHandler());
  }, []);

  return (
    <div className="missions">
      <table>
        <thead className="tableHeader">
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((el) => (
            <tr key={el.mission_id}>
              <td className="missionName">{el.mission_name}</td>
              <td className="missionDescription">{el.description}</td>
              <td className="btnRow">
                <span className="activeMember">
                  Active Member
                </span>
              </td>
              <td className="btnRow">
                <button
                  type="button"
                  className="activeButton"
                >
                  Leave Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
