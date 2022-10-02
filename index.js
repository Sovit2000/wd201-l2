const http = require("http");
const fs = require("fs");
const args = require('minimist')(process.argv.slice(2));

let homecontent = "";
let projectcontent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
    console.log(home.toString());
  });

  fs.readFile("home.html", (err, home) => {
    if (err) {
      throw err;
    }
    http
      .createServer((request, response) => {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(home);
        response.end();
      })
      .listen(args.port = 5000);
  });

  const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port = 5000);