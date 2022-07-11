import { render, screen, waitFor } from '@testing-library/react-native';
// import '@testing-library/jest-dom/extend-expect';
import HelloWorldApp from './App.tsx';

jest.mock('./fetchMovieData', () => jest.fn().mockResolvedValue(
  ['https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg']))

describe('App component', () => {
 test('render title', async () => {
   render(<HelloWorldApp />);
   //await screen.findByTestId('loader')
   screen.debug()
   await waitFor(() => {
    screen.findByText('Castle in the Sky');
    screen.getByText('Grave of the Fireflies');
    screen.getByText('My Neighbor Totoro');
    screen.getByText("Kiki's Delivery Service");
    screen.getByText('Only Yesterday');
   })
   screen.debug()
 }),
 test('render image', async () => {
  render(<HelloWorldApp />);
  screen.debug()
  await waitFor(() => {
   screen.findByText('https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg');
  })
  screen.debug()
})
 
})