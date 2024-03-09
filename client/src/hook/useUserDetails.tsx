import { useState, useEffect } from 'react';
import Repository from '../interface/Repository';
import Friend from '../interface/Friend';


const useUserDetails = (id: string) => {
    const [user, setUser] = useState<any>();
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [friends, setFriends] = useState<Friend[]>([]);
    const [repoPage, setRepoPage] = useState<number>(0);
    const [friendPage, setFriendPage] = useState<number>(0);
    const [hasMoreRepos, setHasMoreRepos] = useState<boolean>(true);
    const [hasMoreFriends, setHasMoreFriends] = useState<boolean>(true);
    const [friendLoading, setFriendLoading] = useState<boolean>(false);
    const [repoLoading, setRepoLoading] = useState<boolean>(false);
    const [userLoading, setUserLoading] = useState<boolean>(false);

    const fetchRepositories = async (pageNumber: number) => {
        if (user && hasMoreRepos) {
            try {
                setRepoLoading(true)
                const response = await fetch(`/api/users/profile/repo/${user.login}?page=${pageNumber}`);
                const repos = await response.json();

                if (Array.isArray(repos)) {
                    console.log(repos);
                    setRepositories((prevRepos) => [...prevRepos, ...repos]);
                    setRepoPage(repoPage + 1);
                    setHasMoreRepos(repos.length > 10);
                } else {
                    // Handle the case where the response is not an array
                    console.error('Invalid repositories response:', repos);
                }
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
            setRepoLoading(false);
        }
    };


    const fetchFriends = async (pageNumber: number) => {
        if (user && hasMoreFriends) {
            try {
                setFriendLoading(true);
                const response = await fetch(`/api/users/profile/followers/${user.login}/?page=${pageNumber}`);
                const friends = await response.json();

                if (Array.isArray(friends)) {
                    console.log(friends);
                    setFriends((prevFriends) => [...prevFriends, ...friends]);
                    setFriendPage(friendPage + 1);
                    setHasMoreFriends(friends.length > 10);
                } else {
                    // Handle the case where the response is not an array
                    console.error('Invalid friends response:', friends);
                }
            } catch (error) {
                console.error('Error fetching friends:', error);
            }
            setFriendLoading(false);
        }
    };

    const fetchUser = async () => {
        try {
            setUserLoading(true);
            const response = await fetch(`/api/users/profile/${id}`);
            const user = await response.json();
            console.log(user);
            setUser(user);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
        setUserLoading(false);
    };

    useEffect(() => {
        setUserLoading(true);
        fetchUser();
        setUserLoading(false);
    }, []);

    useEffect(() => {
        if (user) {
            fetchRepositories(repoPage);
            fetchFriends(friendPage);
        }

    }, [user]);

    return {
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
    };
};

export default useUserDetails;
