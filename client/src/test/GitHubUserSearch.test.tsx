import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import GitHubUserSearch from '../pages/GitHubUserSearch';
import useGitHubUsers from '../hook/useGitHubUsers';

jest.mock('../hook/useGitHubUsers');

const mockedUser = 
{
    "login": "john",
    "id": 1668,
    "avatar_url": "https://avatars.githubusercontent.com/u/1668?v=4",
}

const mockUseGitHubUsers = (mockedData: Partial<any> = {}) => {
  (useGitHubUsers as jest.Mock).mockReturnValue({
    users: [],
    hasMore: true,
    fetchAndSetData: jest.fn(),
    page: 1,
    resetUsers: jest.fn(),
    loading: false,
    ...mockedData,
  });
};

it('should render GitHubUserSearch component with user "john"', async () => {
  
    mockUseGitHubUsers({
      users: [mockedUser],
    });
  
    render(<GitHubUserSearch />);
    await waitFor(() => {
      expect(screen.getByText(mockedUser.login)).toBeInTheDocument(); 
    });
  });
