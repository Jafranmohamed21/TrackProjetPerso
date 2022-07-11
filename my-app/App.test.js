import { render, screen, waitFor } from '@testing-library/react-native';
// import '@testing-library/jest-dom/extend-expect';
import HelloWorldApp from './App.tsx';

jest.mock('./fetchMovieData', () => jest.fn().mockResolvedValue(['Castle in the Sky']))

describe('App component', () => {
 test('render title', async () => {
   const component =  render(<HelloWorldApp />);
   //await screen.findByTestId('loader')
   component.debug()
   await waitFor(() => {
    component.getByText('Castle in the Sky');
   })
   component.debug()

 });
})