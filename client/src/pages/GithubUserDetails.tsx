import React from 'react';
import { useParams } from 'react-router-dom';
import useUserDetails from '../hook/useUserDetails';
import Grid from '@mui/material/Grid';
import FriendsList from '../component/FriendsList';
import RepoList from '../component/RepoList';
import UserDetails from '../component/UserDetails';
import LoaderComponent from '../component/Loader';

const GithubUserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    user,
    repositories,
    friends,
    repoPage,
    friendPage,
    hasMoreRepos,
    hasMoreFriends,
    fetchRepositories,
    fetchFriends,
    repoLoading,
    friendLoading,
    userLoading
  } = useUserDetails(id ?? "");

  return (
    <Grid container spacing={2}>
      <LoaderComponent loading={userLoading} />
      <Grid item xs={12} >
        <UserDetails user={user} />
      </Grid>

      {/* Repository List */}
      <Grid item xs={12} md={6}>
        <RepoList repositories={repositories} repoLoading={repoLoading}  fetchRepositories={fetchRepositories} repoPage={repoPage} hasMoreRepos={hasMoreRepos} />
      </Grid>

      {/* Friends List */}
      <Grid item xs={12} md={6}>
        <FriendsList friends={friends} friendLoading={friendLoading}  fetchFriends={fetchFriends} friendPage={friendPage} hasMoreFriends={hasMoreFriends} />
      </Grid>
    </Grid>
  );
};

export default GithubUserDetails;
