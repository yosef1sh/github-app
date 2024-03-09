import { render, screen, waitFor } from '@testing-library/react';
import GitHubUserDetails from '../pages/GithubUserDetails';
import useUserDetails from '../hook/useUserDetails';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';

jest.mock('../hook/useUserDetails');

const mockedUserDetails: any = {
  user: {
    login: "vanpelt",
    avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
    bio: null,
    name: "Chris Van Pelt",
    followers: "232",
    following: "20",
    public_repos: "59",
    location: "San Francisco",
  },
  repositories: {
    id: 1,
    name: "vanpelt.github.io",
    description: "My blog.",
    html_url: "",
  },
  friends: {
    id: 2,
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  },
};


const mockUseUserDetails = jest.fn();
mockUseUserDetails.mockReturnValue({
  user: mockedUserDetails.user,
  repositories: [mockedUserDetails.repositories],
  friends: [mockedUserDetails.friends],
  repoPage: 1,
  friendPage: 1,
  hasMoreRepos: true,
  hasMoreFriends: true,
  fetchRepositories: jest.fn(),
  fetchFriends: jest.fn(),
  repoLoading: false,
  friendLoading: false,
  userLoading: false,
});



it('renders specific user details correctly', async () => {
  // Mock the useUserDetails hook
  
render(
    <AuthContextProvider>
    <MemoryRouter initialEntries={['/user/vanpelt']}>
      <Routes>
        <Route path="/user/:id" element={<GitHubUserDetails />} />
      </Routes>
    </MemoryRouter>
    </AuthContextProvider>
);

await waitFor(() => {
    // Check if specific user details are rendered
    expect(screen.getByText(/vanpelt/i)).toBeInTheDocument();
    expect(screen.getByText(/vanpelt\.github\.io/i)).toBeInTheDocument();
    expect(screen.getByText(/defunkt/i)).toBeInTheDocument();
  });
});