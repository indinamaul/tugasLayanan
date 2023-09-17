// Import Node.js core module i.e http
const fs = require("fs");
const http = require("http");
const express = require("express");
const mysql = require("mysql");

// Create an Express application
const app = express();

// Create web server
const server = http
  .createServer(function (req, res) {
    // Check the URL of the current request
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        `<html>
        <body style="text-align:center; background-color:powderblue;">
            <h1 style="color:red;">HELLO WORLD</h1>
            </a>
            </body>
        </html>`
      );
      res.end(); //end the response
    } else if (req.url == "/insert") {
      // Set response header
      res.writeHead(200, { "Content-Type": "text/html" });

      // Set response content
      res.write(
        `<html lang="en">
              <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            
                <!-- BOOTSTRAP ICON -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
            
                <title>Hello World</title>
                <link rel="stylesheet" href="style.css" />
              </head>
              <body>
                <h1>Hello World</h1>
                <p>Insert Data</p>
                <form action="/insert" method="post">
                  <p>
                    <label for="firstName">First Name:</label>
                    <input type="text" name="first_name" id="firstName" />
                  </p>
                  <p>
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="last_name" id="lastName" />
                  </p>
                  <p>
                    <label for="emailAddress">Email Address:</label>
                    <input type="text" name="email" id="emailAddress" />
                  </p>
                  <input type="submit" value="Submit" />
                </form>
                <p>
                </p>
              </body>
            </html>`
      );
      res.end(); //end the response
    } else if (req.url == "/tampil") {
      // MySQL database configuration
      const db = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "layanan1",
      });

      // Connect to the MySQL database
      db.connect((err) => {
        if (err) {
          console.error("Error connecting to the database:", err);
          return;
        }
        console.log("Connected to MySQL database");
      });

      // Define a route to handle requests
      app.get("/", (req, res) => {
        // Query to fetch data from MySQL
        const query = "SELECT first_name, last_name, email FROM layanan1 ORDER BY nomor DESC LIMIT 10";

        db.query(query, (err, results) => {
          if (err) {
            console.error("Error executing MySQL query:", err);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          const data = results.map((row) => `${row.first_name}, ${row.last_name}, ${row.email}`);

          res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
                <title>Data MySQL</title>
            </head>
            <body>
                <h1>Data MySQL</h1>
                <ul>${data.map((item) => `<li>${item}</li>`).join("")}</ul>
                <a href="usecsshtml.js">Insert kembali</a>
            </body>
            </html>
            `);
        });
      });
    } else res.end("Invalid Request!"); //end the response

    // Server object listens on port 8081
  })
  .listen(3000, () => console.log("Server running on port 3000"));
