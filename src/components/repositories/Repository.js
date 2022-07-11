import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import { response } from '../../services';
import { WrapperTabs } from './style/WrapperTabs';

function Repository() {
  const { userData } = useContext(GithubContext);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepos = async (username, route) => {
      const repos = await response.get(`users/${username}/${route}`)
        .then(({ data }) => {
          setRepositories(data);
        });
      return repos;
    }
    if (userData.login) {
      getRepos(`${userData.login}`, 'repos');
      getRepos(`${userData.login}`, 'starred');
    }
  }, [repositories, userData.login])

  return (
    <>
      <WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >

      </WrapperTabs>
    </>
  );
}

export default Repository;