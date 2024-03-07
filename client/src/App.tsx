
import './App.css';
import _debounce from 'lodash/debounce';
import { Route, Routes } from 'react-router-dom';
import GitHubUserSearch from './pages/GitHubUserSearch';
import GithubUserDetails from './pages/GithubUserDetails';
import DarkMode from './component/DarkMode';

function App() {

  return (
    <div className="App">
      <DarkMode />
      <Routes>
        <Route path="/" element={<GitHubUserSearch />} />
        <Route path="users" element={<GitHubUserSearch />} />
        <Route path="user/:id" element={<GithubUserDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}


export default App;
