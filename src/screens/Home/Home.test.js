import {apiKey} from '@constants/apiKey';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Home from '../Home/Home';

import {NavigationContainer} from '@react-navigation/native';
import {store} from '@redux/store';
import {http} from 'msw';
import {setupServer} from 'msw/node';
// import {QueryClient, QueryClientProvider} from '@reduxjs/toolkit/query/react';
import {QueryClient} from 'react-query';

const route = {
  params: {
    adult: false,
    backdrop_path: ' string',
    genre_ids: [],
    id: 2,
    original_language: 'string',
    original_title: 'string',
    overview: 'string',
    popularity: 2,
    poster_path: 'string',
    release_date: 'string',
    title: 'String',
    video: false,
    vote_average: 2,
    vote_count: 2,
  },
};

// Create a Mock Service Worker (MSW) server
const server = setupServer(
  http.get(
    `api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${1}&sort_by=popularity.desc`,
    (req, res, ctx) => {
      // Return mock data
      return res(
        ctx.json({
          data: [route],
        }),
      );
    },
  ),
);

beforeAll(() => server.listen);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const navigation = {
  navigate: jest.fn(),
};

function renderWithProviders(UiComponent) {
  return render(<Provider store={store}>{UiComponent}</Provider>);
}
function renderWithNavigation(UiComponent) {
  return render(
    <Provider store={store}>
      <NavigationContainer>{UiComponent}</NavigationContainer>
    </Provider>,
  );
}

// jest.mock('@services/movieApis', () => ({
//   useGetMovieQuery: jest.fn(() => ({data: [route], isFetching: false})),
// }));
describe('test home screen ', () => {
  it.skip(`snapShoot Home`, () => {
    const tree = renderWithProviders(<Home />);
    expect(tree).toMatchSnapshot();
  });
  const queryClient = new QueryClient();
  it(`render Home UI `, async () => {
    const screen = renderWithNavigation(<Home navigation={navigation} />);
    fireEvent.press(screen.getByTestId('history-movement'));
    await waitFor(() =>
      expect(navigation.navigate).toHaveBeenCalledWith('History'),
    );

    const homeScreen = screen.getByTestId('view');
    expect(homeScreen).toBeTruthy();
  });

  it(`navigates to History Screen on button press`, () => {
    const screen = renderWithProviders(<Home navigation={navigation} />);
    fireEvent.press(screen.getByTestId('history-movement'));
    expect(navigation.navigate).toHaveBeenCalledWith('History');
  });
});
