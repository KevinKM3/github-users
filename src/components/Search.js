import React, { useState } from "react";

const Search = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    //console.log(profileJson);

    // fetch repos from profiles
    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="Search usernames..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search Users
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
