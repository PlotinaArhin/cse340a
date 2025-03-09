/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path"); // Added path module
const env = require("dotenv").config();
const app = express();

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Added views directory configuration
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Middleware
 *************************/
// Serve static files directly (safer than separate route file)
app.use(express.static(path.join(__dirname, "public")));

/* ***********************
 * Routes
 *************************/
// Index route (modern arrow function syntax)
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

/* ***********************
 * Server Configuration
 *************************/
const port = process.env.PORT || 3000; // Fallback port
const host = process.env.HOST || "localhost";

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});