# Challanges

## Challange 3:

Given a string  `s`  consists of some words separated by some number of spaces,
return the length of the last word in the string. A word is a maximal substring
consisting of non-space characters only.
Constraints
- `1 <= s.length <= 104`
- s consists of only English letters and regular spaces ' ' .
- There will be at least one word in s.
Examples:
- Given the input  `s = "Hello World"`  the output is 5
- Given the input  `s = " fly me to the moon "` the output is `4`
- Given the input  `s = "luffy is still joyboy"`  the output is `6`

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

Code a list of users with countries `type User = { name: string; country: string }`
in React.js.
You should be able to filter users from a specific country.
What questions you would ask your product manager if you received this task?

**My Queries:**  
- Should I search  with substring of country as I implemented in UI?
- Scope of this task should include UI work or only functional work?
- Task is completed using `props and useState`. If this task is part of react application, May be I use state management tool like Redux and use dispatching. Can I use Redux for state management in the application?

Kindly see `challange4` folder for further details.

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

Given two arrays of integers (lengths n and m), find the 
 between them. Items are unique within a single array.
symmetric
difference
Constraints
- `n, m <= 100`
Example:
Given the set  `[1, 2, 3]`  and the set  `[3, 4]`  the output would be  `[1, 2, 4]`


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
