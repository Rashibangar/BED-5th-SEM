const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.post("/users", (req, res) => {
  const newUser = req.body;

  fs.readFile("./users.txt", "utf-8", (err, data) => {
    let allUsers = [];

    if (!err && data.trim()) {
        allUsers = JSON.parse(data); 
    }

    allUsers.push(newUser); 

    fs.writeFile("./users.txt", JSON.stringify(allUsers, null, 2), (err) => {
      if (err) {
        console.log("Error writing file:", err);
      }

      res.send({ message: "User saved successfully", data: newUser });
    });
  });
});

// app.get("/users_data", (req, res) => {
//   fs.readFile("./users.txt", "utf-8", function (err, data) {
//     if (err) {
//       console.log(err);
//     }
//      const users = JSON.parse(data);
//       res.send({ message: "Data fetched successfully", users });
    
//   });
// });

app.get("/register", (req, res) => {
  const newUser = {
    name: req.query.name,
    RollNo: req.query.RollNo,
  };

  
  fs.readFile("./users.txt", "utf-8", (err, data) => {
    let users = [];
    if (!err && data) {
        users = JSON.parse(data);
    }

    users.push(newUser);

    
    fs.writeFile("./users.txt", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).send({ message: "Error saving user" });

      res.send({ message: "User registered successfully", user: newUser });
    });
  });
});

app.listen(1427, () => {
  console.log("Server started");
});
