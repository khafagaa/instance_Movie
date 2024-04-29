import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Details from '@screens/DetailsPage/Details'; // Adjust the import path as per your project structure
import {Provider} from 'react-redux'; // Import the Provider component from react-redux
import {store} from '@redux/store';

// Mock the navigation functions
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const navigation = {
  navigate: jest.fn(),
};

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

describe('test details screen ', () => {
  it(`snapShot Details`, () => {
    const tree = render(
      <Provider store={store}>
        <Details route={route} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it(`render Details UI `, () => {
    const {getByText} = render(
      <Provider store={store}>
        <Details navigation={navigation} route={route} />
      </Provider>,
    );
    expect(getByText('Overview')).toBeTruthy();
  });

  it(`check Details navigation`, () => {});
});
