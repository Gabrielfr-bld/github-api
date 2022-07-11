import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import { response } from '../../services';
import { WrapperList } from './style/WrapperList';
import { WrapperTab } from './style/WrapperTab';
import { WrapperTabList } from './style/WrapperTabList';
import { WrapperTabPanel } from './style/WrapperTabPanel';
import { WrapperTabs } from './style/WrapperTabs';
import CardRepository from './CardRepository';

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
          <WrapperList>
            {repositories.map(repository => (
              <CardRepository
                key={repository.id}
                name={repository.name}
                linkRepo={repository.full_name}
                fullName={repository.full_name}
              />
            ))}
          </WrapperList>
        </WrapperTabPanel>
      </WrapperTabs>
    </>
  );
}

export default Repository;