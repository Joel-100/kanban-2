import { React } from 'react';
import { useSelector } from 'react-redux';

const MyRocket = () => {
  const RocketProfile = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.reserved === true,
  );

  if (RocketProfile.length === 0) {
    return (
      <>
        <h2>My Rockets</h2>
        <p>You have no rockets</p>
      </>
    );
  }
  return (
    <div>
      <div className="mission-Profile">
        <h2>My Rockets</h2>
        <div className="mission-Profile">
          <ul className="missionList">
            {RocketProfile.map((el) => (
              <li key={el.id} className="listItem">
                {el.rockets_name}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default MyRocket;
