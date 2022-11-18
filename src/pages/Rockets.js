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
      <div className="rocket-card">
        <div className="rocket-profile">
          <img src="" alt="rocket" />
        </div>
        <div className="rocket-description">
          <h1>Flight 1</h1>
          <p>
            <span className="reserved-badge">Reserved</span>
            Description
          </p>
          <button className="btn" type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
}

export default Rockets;
