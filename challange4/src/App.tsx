import React, { useState } from "react";
import SearchIcon from "./search-icon.png";
import "./App.css";
import { User, Users } from "./users";

function App() {
  const [usersArray, setUsersArray] = useState(Users);
  const getUsersByCountry = (country: string, users: User[]) => {
    let newUsers = users.filter((u) =>
      u.country.toLowerCase().includes(country.toLowerCase())
    );
    setUsersArray(newUsers);
  };

  const searchUser = (e: any) => {
    debugger;
    if (e.key === "Enter") {
      console.log("do validate");
      getUsersByCountry(e.target.value, Users);
      e.target.value = null;
    }
  };
  return (
    <div className="App">
      <div className="serachBox">
        <div className="searchInput">
          <div className="searchIcon">
            <img src={SearchIcon} />
          </div>
          <div className="inputField">
            <input
              type="search"
              placeholder="Search by Country"
              onKeyDown={searchUser}
            />
          </div>
        </div>
      </div>

      <section className="SearchResults">
        <table>
          <tr>
            <th>Username</th>
            <th>Country</th>
          </tr>
          {usersArray.map((u, index) => {
            return (
              <tr key={index}>
                <td>{u.name} </td>
                <td>{u.country}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
}

export default App;
