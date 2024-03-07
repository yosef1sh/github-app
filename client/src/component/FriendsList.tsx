import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserList from './UserList';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import LoaderComponent from './Loader';

interface Friend {
  id: number;
  login: string;
  avatar_url: string;
}

interface FriendsProps {
  friends: Friend[];
  fetchFriends: (pageNumber: number) => void;
  friendPage: number;
  hasMoreFriends: boolean;
  friendLoading: boolean;
}

const FriendsList: React.FC<FriendsProps> = ({ friends, fetchFriends, friendPage, hasMoreFriends,friendLoading }) => {
  const [showFullList, setShowFullList] = useState(false);

  const handleShowFullList = () => {
    setShowFullList(true);
  };

  return (
    <Card id="scrollableDivFriends" variant="outlined" style={{ marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Friends:
        </Typography>
        {!showFullList ? (
          <>
            <UserList users={friends} />
            <Button onClick={handleShowFullList} variant="contained" color="primary" style={{ marginTop: '50px' }}>
              Show All Friends
            </Button>
          </>
        ) : (
          <InfiniteScroll
            dataLength={friends?.length || 0}
            next={() => fetchFriends(friendPage)}
            hasMore={hasMoreFriends}
            loader={<LoaderComponent loading={friendLoading} />}
            scrollableTarget="scrollableDivFriends"
          >
            <UserList users={friends} />
          </InfiniteScroll>
        )}
      </CardContent>
      <Divider />
    </Card>
  );
};

export default FriendsList;
