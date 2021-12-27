# Challanges

## Challange 3:

```javascript
const getLastWord = (s) => {
  if (1 <= s.length <= 104) {
    s = s.trim();
    var words = s.split(" ");
    return words[words.length - 1].length;
  }
  return;
};

console.log("Output is:", getLastWord("Hello World"));
console.log("Output is:", getLastWord(" fly me   to   the moon   "));
console.log("Output is:", getLastWord("luffy is still joyboy"));
```

## Challange 4:

```javascript
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
```

## Challange 5:

```javascript
// challenge 5 => Difference of array
const getSymmetricDifference = (arr1, arr2) => {
  if (arr1.length <= 100 && arr2.length <= 100) {
    const x = arr1.filter((x) => !arr2.includes(x));
    const y = arr2.filter((x) => !arr1.includes(x));
    const symmetricDifference = x.concat(y);
    console.log(symmetricDifference, "difference of array");
    return symmetricDifference;
  }
  return;
};

let firstArray = [1, 2, 3];
let secondArray = [3, 4];
getSymmetricDifference(firstArray, secondArray);
```
