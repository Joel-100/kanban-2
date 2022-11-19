import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from './redux/configStore';
import Rockets from "./pages/Rockets";
import Mission from "./pages/Mission";
import Profile from './pages/Profile';

describe('Test UI', () => {
  test('Test Rocket UI', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  test('Test Mission UI', () => {
    const tree = render(
      <Provider store={store}>
        <Mission />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  test('Test Profile UI', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});