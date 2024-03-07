import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Typography from '@mui/material/Typography';
import AccordionUsage from './AccordionUsage';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import LoaderComponent from './Loader';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

interface RepositoriesProps {
  repositories: Repository[] | null;
  fetchRepositories: (pageNumber: number) => void;
  repoPage: number;
  hasMoreRepos: boolean;
  repoLoading:boolean;
}

const RepoList: React.FC<RepositoriesProps> = ({ repositories, fetchRepositories, repoPage, hasMoreRepos,repoLoading }) => {
  const [showFullList, setShowFullList] = useState(false);

  const handleShowFullList = () => {
    setShowFullList(true);
    // Fetch additional repositories if needed
    if (hasMoreRepos) {
      fetchRepositories(repoPage);
    }
  };

  return (
    <Card id="scrollableDivRepo" variant="outlined" style={{ marginBottom: '20px', maxHeight: '400px', overflowY: 'scroll' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Repositories:
        </Typography>
        {!showFullList ? (
          <>
            <AccordionUsage repositories={repositories} />
            <Button onClick={handleShowFullList} variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Show Full List
            </Button>
          </>
        ) : (
          <InfiniteScroll
            dataLength={repositories?.length || 0}
            next={() => fetchRepositories(repoPage)}
            hasMore={hasMoreRepos}
            loader={<LoaderComponent loading={repoLoading} />}
            scrollableTarget="scrollableDivRepo"
          >
            <AccordionUsage repositories={repositories} />
          </InfiniteScroll>
        )}
      </CardContent>
      <Divider />
    </Card>
  );
};
export default RepoList;

