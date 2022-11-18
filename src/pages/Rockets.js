import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rockets/rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);
  console.log(rockets);
  return (
    <div>Rockets</div>
  );
}

export default Rockets;
