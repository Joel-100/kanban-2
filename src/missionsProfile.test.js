import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import MissionProfile from './components/MissionProfile';

describe('Test MyProfile Component', () => {
  it('should render the profile page', () => {
    render(
      <Provider store={store}>
        <MissionProfile />
      </Provider>
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
});