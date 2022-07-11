import React, { useContext, useEffect, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import { response } from '../../services';
import {
  WrapperList,
  WrapperTab,
  WrapperTabList,
  WrapperTabPanel,
  WrapperTabs
} from './style';
import CardRepository from './CardRepository';

function Repository() {
  const { userData } = useContext(GithubContext);
  const [repositories, setRepositories] = useState([]);
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    const getRepos = async (username) => {
      const repos = await response.get(`users/${username}/repos`)
        .then(({ data }) => {
          setRepositories(data);
        });
      return repos;
    }
    if (userData.login) {
      getRepos(`${userData.login}`);
    }

    const getStarred = async (username) => {
      const starred = await response.get(`users/${username}/starred`)
        .then(({ data }) => {
          setStarred(data);
        });
      return starred;
    }
    if (userData.login) {
      getStarred(`${userData.login}`);
    }

  }, [starred, repositories, userData.login])

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
        <WrapperTabPanel>
          <WrapperList>
            {starred.map(repository => (
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