import response from "./baseUrl";

const getUser = async (username) => {
    const userData = await response.get(`users/${username}`)
      .then(({data}) => {
        return  {
          id: data.id,
          avatar: data.avatar_url,
          login: data.login,
          name: data.name,
          htmlUrl: data.html_url,
          blog: data.blog,
          company: data.company,
          followers: data.followers,
          following: data.following,
          publicRepos: data.public_repos,
          publicGists: data.public_gists,
        };
      })
  return userData;
}

export default getUser;