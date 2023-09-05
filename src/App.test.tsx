import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('app.tsx', () => {
  test('renders loading message', async () => {
    render(<App />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));
  });
  test('renders imageGrid', async () => {
    render(<App />);
    await screen.findByTestId('image-grid');
    expect(screen.getByTestId('image-grid')).toBeInTheDocument();
  });
  test('renders infoPanel when clicking on a image', async () => {
    render(<App />);
    const imageGrid = await screen.findByTestId('image-grid');
    const child = within(imageGrid).getByAltText('Super car parked in garage')
    userEvent.click(child)
    expect(screen.getByTestId('info-panel')).toBeInTheDocument();
  });
  
})
