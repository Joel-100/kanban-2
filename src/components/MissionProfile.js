import { React } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionProfile = useSelector((state) => state.missionsReducer).filter(
    (mission) => mission.active === true,
  );

  if (missionProfile.length === 0) {
    return (
      <>
        <h2>My Missions</h2>
        <p>You have no missions</p>
      </>
    );
  }
  return (
    <div>
      <div className="mission-Profile">
        <h2>My Missions</h2>
        <div className="mission-Profile">
          <ul className="missionList">
            {missionProfile.map((el) => (
              <li key={el.id} className="listItem">
                {el.mission_name}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
