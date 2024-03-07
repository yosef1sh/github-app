const fetch = require('node-fetch');

const getUsers = async (req, res) => {
  try {
    const { pageNumber, query } = req.params;

    const url = query !== null && query !== ''
      ? `https://api.github.com/search/users?q=${query}&per_page=10&page=${pageNumber}`
      : `https://api.github.com/users?per_page=10&since=${pageNumber * 11}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const data = await response.json();

    const responseData = query === '' ? data : data.items || [];

    res.status(200).json({ users: responseData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    const userProfile = await userRes.json();

    res.status(200).json({ userProfile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserRepo = async (req, res) => {
  try {
    const { username } = req.params;
    const { page } = req.query;

    const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    if (response.status === 404) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const repositories = await response.json();

    res.status(200).json({ repositories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserFollowers = async (req, res) => {
  try {
    const { username } = req.params;
    const { page } = req.query;

    const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    if (response.status === 404) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const followers = await response.json();

    res.status(200).json({ followers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserProfile,
  getUserRepo,
  getUserFollowers,
};
