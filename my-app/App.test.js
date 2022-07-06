import { render, screen } from '@testing-library/react';
import HelloWorldApp from './App';

describe('App component', () => {
 test('it renders', () => {
   render(<HelloWorldApp />);
   expect(screen.getByText('Castle in the sky')).toBeInTheDocument();
 });
})