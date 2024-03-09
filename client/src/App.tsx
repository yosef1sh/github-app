
import './App.css';
import _debounce from 'lodash/debounce';
import { Route, Routes } from 'react-router-dom';
import GitHubUserSearch from './pages/GitHubUserSearch';
import GithubUserDetails from './pages/GithubUserDetails';
import LoginPage from './pages/Login';
import NavigationBar from './component/NavigationBar';
import { useAuthContext } from './context/AuthContext';
import LikedProfilesPage from './pages/LikedProfilesPage';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<GitHubUserSearch />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<GitHubUserSearch />} />
        <Route path="/user/:id" element={<GithubUserDetails />} />
        <Route path="/likedProfiles" element={<LikedProfilesPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}


export default App;
