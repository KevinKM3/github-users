import React, { useState } from "react";

const Search = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);
  };

  return (
    <section className="searchbox-wrap">
      <input
        className="searchbox"
        placeholder="Search for a GitHub user..."
        type="text"
        value={username}
        onChange={onChangeHandler}
      />

      <button type="submit" onClick={submitHandler}>
        Search for User
      </button>
    </section>
  );
};

export default Search;
