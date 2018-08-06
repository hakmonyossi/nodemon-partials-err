const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartial() (__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello Express</h1>');
//     res.send({
//         name: 'Yossi',
//         loves: [
//             'skateboard',
//             'Movies'
//         ]
//     });
// });

app.get('/', (req, res) => {
    res.render('homepage.hbs' , {
        pageTitle: 'Homepage',
        currentYear: new Date().getFullYear(),
        welcomeMSG: 'Welcome to my homepage'
    });
});

app.get('/about', (req, res) => {
    res.render('About.hbs' , {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        Error: 'Bad request',
        errorMssage: [
            'unable to fulfil the request',
            'We sorry about it'
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});;exports.__dirname = __dirname;
