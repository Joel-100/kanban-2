import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rockets/rocket';
import './style.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);
  console.log(rockets);
  return (
    <div className="rocket-container">
      {rockets?.map((item) => (
        <div className="rocket-card" key={item.id}>
          <div className="rocket-profile">
            <img src={item.flickr_images} alt="" />
          </div>
          <div className="rocket-description">
            <h1>{item.rockets_name}</h1>
            <p>
              <span className="reserved-badge">Reserved</span>
              {item.description}
            </p>
            <button className="btn" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
