import response from "./baseUrl";

const getAnyRepos = async (username, route) => { 
  const repos = await response.get(`users/${username}/${route}`)
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

export default getAnyRepos;