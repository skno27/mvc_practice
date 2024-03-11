import fetch from "node-fetch";

// fetch("http://localhost:3000/users")
//   .then((data) => data.json())
//   .then((data) => console.log(data.users));

// console.log("--------------------------\n");
// console.log("Next step: \n");

async function getUsers() {
  const results = await fetch("http://localhost:3000/users")
    .then((data) => data.json())
    .then((data) => data);

  for (const result of results.users) {
    console.log(
      "User Creds:",
      "ID:",
      result.id,
      "Email:",
      result.email,
      "Username:",
      result.username
    );
  }
}

async function getUser(id) {
  const user = await fetch(`http://localhost:3000/user/${id}`)
    .then((data) => JSON.stringify(data))
    .then((data) => data);
  console.log(user);
}

// getUsers();
getUser(1);
