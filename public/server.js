const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static('public'));

// Endpoint to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
  // Process the form submission here
  
  // Sending the thank you page as a response
  const thankYouPage = `
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>
    Thank You message for Cat Photo App form submission| Lyean
  </title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

  <style>
    @import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");

    html {
      background-color: #ffffff;
    }

    body {
      font-family: "Roboto Mono", monospace;
      color: #0a0a23;
      font-size: 18px;
      padding: 1em;
      line-height: 1.4;
      text-align: center;
      margin-top: 5vw;
    }

    html,
    body {
      height: 90%;
    }

    body {
      margin: 0;
    }

    h1,
    p {
      text-align: left;
    }

    .flex-container {
      height: 100%;
      padding: 0;
      margin: 0;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    footer {
      font-size: 0.75em;
    }
  </style>
</head>

<body>
  <div class="flex-container">
    <div class="message-container">
      <h1>Thank you!</h1>
      <p>We will review your submitted response and reply if needed.</p>
    </div>
  </div>
  <footer>
    @ 2023 <a href="" target="_blank">Lyean</a>
  </footer>


</body>
</html>
  `;
  
  res.send(thankYouPage);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
