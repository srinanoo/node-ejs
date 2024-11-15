const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index', { data: { "name": "< Dinesh & Pradeep > <strong>Tag</strong>", "age": 20, "active": false} });
});

const blog = [
    {"title": "Blog 1"},
    {"title": "Blog 2"},
    {"title": "Blog 3"}
]
app.get('/blog/', (req, res) => {
    res.render('pages/blogs', { data: blog, title: "Articles" });
});

app.listen(4000, () => console.log('Server is listening at port: 4000'));