import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import { response } from '../../services';
import { WrapperTab } from './style/WrapperTab';
import { WrapperTabList } from './style/WrapperTabList';
import { WrapperTabPanel } from './style/WrapperTabPanel';
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
    }
  }, [repositories, userData.login])

  return (
    <>
      <WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <WrapperTabList>
          <WrapperTab>Repositories</WrapperTab>
          <WrapperTab>Starred</WrapperTab>
        </WrapperTabList>
        <WrapperTabPanel>

        </WrapperTabPanel>
      </WrapperTabs>
    </>
  );
}

export default Repository;