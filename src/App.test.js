import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//https://www.youtube.com/watch?v=Kyc_Z_2b2Hc&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=94&ab_channel=IT-KAMASUTRA
//import { createRoot } from 'react-dom/client';
//
// test('renders without crashing', () => {
//     const container = document.createElement('div');
//     const root = createRoot(container);
//     root.render(<SamuraiJSApp tab="home" />);
//     root.unmount();
// });