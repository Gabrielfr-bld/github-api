import response from "./baseUrl";

const getRepos = async (username) => { 
  const repos = await response.get(`users/${username}/repos`)
    .then(({data}) => {
      return data.map(({name, html_url, full_name}) => {
        return {
          name,
          html_url,
          full_name,
        };
      });
    });
  return repos;
}

export default getRepos;