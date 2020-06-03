import React from "react";

const Info = () => {
  return (
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name">James</td>
          <td data-label="Age">24</td>
          <td data-label="Job">Engineer</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Info;
