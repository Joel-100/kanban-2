import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import Profile from './pages/Profile';
describe('Test Profile Page', () => {
  it('should render the profile page', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
  it('should render the profile page', async () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
}); 