import { render, screen, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HelloWorldApp from './App.tsx';

jest.mock('./fetchMovieData', () => jest.fn().mockResolvedValue(
  ['Porco Rosso', 'Pom Poko', 'Whisper of the Heart', "Princess Mononoke", 'My Neighbors the Yamadas']))

describe('App component', () => {
 test.only('render title', async () => {
   render(<HelloWorldApp />);
   //await screen.findByTestId('loader')
   //screen.debug()
   await waitFor(async () => {
    await screen.findByText('Porco Rosso');
    screen.getByText('Pom Poko');
    screen.getByText('Whisper of the Heart');
    screen.getByText("Princess Mononoke");
    screen.getByText('My Neighbors the Yamadas');
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