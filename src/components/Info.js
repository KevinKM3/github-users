import React from "react";

const Info = ({ data, repositories }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Info;
