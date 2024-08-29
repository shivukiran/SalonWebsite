const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { fname, subject, service, message } = req.body;

    // Here, you would typically handle the form data,
    // e.g., save it to a database or send an email.
    console.log(`Name: ${fname}`);
    console.log(`Subject: ${subject}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);

    // Send a response to the client
    res.send('Thank you for contacting us!');
});


// app.post('/submit-form', (req, res) => {
//     console.log(req.body); // Log to see what data is coming in
//     res.send('Form data received');
// });


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
