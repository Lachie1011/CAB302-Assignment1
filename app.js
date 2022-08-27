// some requirements
const express = require('express');
const fs = require('fs');

// routing 
const restaurantRouter = require('./routes/restaurants');
const forecastRouter = require('./routes/forecasts');

// initialising 'app'
const app = express();

// using a public and static dir
app.use(express.static('public'));

// configuring hostname and port 
const hostname = '127.0.0.1';
const port = 3000;

// Setting up landing page
app.get('/', (req, res) => {
    // writing content type
    res.writeHead(200,{'content-type': 'text/html'});

    // reading in html file and sending 
    fs.readFile('public/index.html', 'utf8', (err, data) => {
        if (err) {
            res.end('Could not find or open file for reading\n');
        } else {
            res.end(data);
        }
    });
});

// routing for restaurants 
app.use('/search/restaurant?',flickrRouter); 

// routing for forecasting 
app.use('/search/forecast?')
app.listen(port, function () {
    console.log(`Express app listening at http://${hostname}:${port}/`);
});
