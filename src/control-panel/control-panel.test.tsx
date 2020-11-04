import React from 'react';
import { render, screen } from '@testing-library/react';
import ControlPanel from './control-panel';

test('renders learn react link', () => {
  render(<ControlPanel rangeSliderId={0}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
