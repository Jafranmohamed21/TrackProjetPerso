import { render, screen, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HelloWorldApp from './App.tsx';

jest.mock('./fetchMovieData', () => jest.fn().mockResolvedValue(
  ['Castle in the Sky']))

describe('App component', () => {
 test.only('render title', async () => {
   render(<HelloWorldApp />);
   //await screen.findByTestId('loader')
   screen.debug()
   await waitFor(() => {
    screen.getByText('Castle in the Sky');
   })
   //screen.debug()
 });
 
 test('render image', async () => {
  render(<HelloWorldApp />);
  await waitFor(() => {
   screen.getByText('https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg');
  })
})
 
})