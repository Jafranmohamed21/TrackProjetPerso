import { render, screen } from '@testing-library/react-native';
// import '@testing-library/jest-dom/extend-expect';
import HelloWorldApp from './App.tsx';

//jest.mock('./fetchMovieData', () => jest.fn().mockResolvedValue({ mesDonnees: 123, ghibli: 'truc' }))

describe('App component', () => {
 test('render title', () => {
   render(<HelloWorldApp />);
   screen.getByText('Castle in the Sky')
 });
})